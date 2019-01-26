webpackJsonp([19],{

/***/ 2672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.default = /*istanbul ignore end*/Diff;
function Diff() {}

Diff.prototype = { /*istanbul ignore start*/
  /*istanbul ignore end*/diff: function diff(oldString, newString) {
    /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var callback = options.callback;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    this.options = options;

    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    }

    // Allow subclasses to massage the input prior to running
    oldString = this.castInput(oldString);
    newString = this.castInput(newString);

    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));

    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    var bestPath = [{ newPos: -1, components: [] }];

    // Seed editLength = 0, i.e. the content starts with the same values
    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      // Identity per the equality and tokenizer
      return done([{ value: newString.join(''), count: newString.length }]);
    }

    // Main worker method. checks all permutations of a given edit length for acceptance.
    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
        var addPath = bestPath[diagonalPath - 1],
            removePath = bestPath[diagonalPath + 1],
            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
        if (addPath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = addPath && addPath.newPos + 1 < newLen,
            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        }

        // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the new string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self.pushComponent(basePath.components, undefined, true);
        } else {
          basePath = addPath; // No need to clone, we've pulled it from the list
          basePath.newPos++;
          self.pushComponent(basePath.components, true, undefined);
        }

        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        // If we have hit the end of both strings, then we are done
        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
        } else {
          // Otherwise track this path as a potential candidate and continue.
          bestPath[diagonalPath] = basePath;
        }
      }

      editLength++;
    }

    // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced.
    if (callback) {
      (function exec() {
        setTimeout(function () {
          // This should not happen, but we want to be safe.
          /* istanbul ignore next */
          if (editLength > maxEditLength) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];
    if (last && last.added === added && last.removed === removed) {
      // We need to clone here as the component clone operation is just
      // as shallow array clone
      components[components.length - 1] = { count: last.count + 1, added: added, removed: removed };
    } else {
      components.push({ count: 1, added: added, removed: removed });
    }
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        newPos = basePath.newPos,
        oldPos = newPos - diagonalPath,
        commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.components.push({ count: commonCount });
    }

    basePath.newPos = newPos;
    return oldPos;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/equals: function equals(left, right) {
    return left === right;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/removeEmpty: function removeEmpty(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/castInput: function castInput(value) {
    return value;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/tokenize: function tokenize(value) {
    return value.split('');
  }
};

function buildValues(diff, components, newString, oldString, useLongestToken) {
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];
    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });

        component.value = value.join('');
      } else {
        component.value = newString.slice(newPos, newPos + component.count).join('');
      }
      newPos += component.count;

      // Common case
      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = oldString.slice(oldPos, oldPos + component.count).join('');
      oldPos += component.count;

      // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.
      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  }

  // Special case handle for when one terminal is ignored. For this case we merge the
  // terminal into the prior string and drop the change.
  var lastComponent = components[componentLen - 1];
  if (componentLen > 1 && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }

  return components;
}

function clonePath(path) {
  return { newPos: path.newPos, components: path.components.slice(0) };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lDQUF3QjtBQUFULFNBQVMsSUFBVCxHQUFnQixFQUFoQjs7QUFFZixLQUFLLFNBQUwsR0FBaUI7eUJBQ2Ysb0JBQUssV0FBVyxXQUF5Qjt3REFBZCxnRUFBVSxrQkFBSTs7QUFDdkMsUUFBSSxXQUFXLFFBQVEsUUFBUixDQUR3QjtBQUV2QyxRQUFJLE9BQU8sT0FBUCxLQUFtQixVQUFuQixFQUErQjtBQUNqQyxpQkFBVyxPQUFYLENBRGlDO0FBRWpDLGdCQUFVLEVBQVYsQ0FGaUM7S0FBbkM7QUFJQSxTQUFLLE9BQUwsR0FBZSxPQUFmLENBTnVDOztBQVF2QyxRQUFJLE9BQU8sSUFBUCxDQVJtQzs7QUFVdkMsYUFBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUNuQixVQUFJLFFBQUosRUFBYztBQUNaLG1CQUFXLFlBQVc7QUFBRSxtQkFBUyxTQUFULEVBQW9CLEtBQXBCLEVBQUY7U0FBWCxFQUE0QyxDQUF2RCxFQURZO0FBRVosZUFBTyxJQUFQLENBRlk7T0FBZCxNQUdPO0FBQ0wsZUFBTyxLQUFQLENBREs7T0FIUDtLQURGOzs7QUFWdUMsYUFvQnZDLEdBQVksS0FBSyxTQUFMLENBQWUsU0FBZixDQUFaLENBcEJ1QztBQXFCdkMsZ0JBQVksS0FBSyxTQUFMLENBQWUsU0FBZixDQUFaLENBckJ1Qzs7QUF1QnZDLGdCQUFZLEtBQUssV0FBTCxDQUFpQixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQWpCLENBQVosQ0F2QnVDO0FBd0J2QyxnQkFBWSxLQUFLLFdBQUwsQ0FBaUIsS0FBSyxRQUFMLENBQWMsU0FBZCxDQUFqQixDQUFaLENBeEJ1Qzs7QUEwQnZDLFFBQUksU0FBUyxVQUFVLE1BQVY7UUFBa0IsU0FBUyxVQUFVLE1BQVYsQ0ExQkQ7QUEyQnZDLFFBQUksYUFBYSxDQUFiLENBM0JtQztBQTRCdkMsUUFBSSxnQkFBZ0IsU0FBUyxNQUFULENBNUJtQjtBQTZCdkMsUUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBRCxFQUFJLFlBQVksRUFBWixFQUFmLENBQVg7OztBQTdCbUMsUUFnQ25DLFNBQVMsS0FBSyxhQUFMLENBQW1CLFNBQVMsQ0FBVCxDQUFuQixFQUFnQyxTQUFoQyxFQUEyQyxTQUEzQyxFQUFzRCxDQUF0RCxDQUFULENBaENtQztBQWlDdkMsUUFBSSxTQUFTLENBQVQsRUFBWSxNQUFaLEdBQXFCLENBQXJCLElBQTBCLE1BQTFCLElBQW9DLFNBQVMsQ0FBVCxJQUFjLE1BQWQsRUFBc0I7O0FBRTVELGFBQU8sS0FBSyxDQUFDLEVBQUMsT0FBTyxVQUFVLElBQVYsQ0FBZSxFQUFmLENBQVAsRUFBMkIsT0FBTyxVQUFVLE1BQVYsRUFBcEMsQ0FBTCxDQUFQLENBRjREO0tBQTlEOzs7QUFqQ3VDLGFBdUM5QixjQUFULEdBQTBCO0FBQ3hCLFdBQUssSUFBSSxlQUFlLENBQUMsQ0FBRCxHQUFLLFVBQUwsRUFBaUIsZ0JBQWdCLFVBQWhCLEVBQTRCLGdCQUFnQixDQUFoQixFQUFtQjtBQUN0RixZQUFJLGtFQUFKLENBRHNGO0FBRXRGLFlBQUksVUFBVSxTQUFTLGVBQWUsQ0FBZixDQUFuQjtZQUNBLGFBQWEsU0FBUyxlQUFlLENBQWYsQ0FBdEI7WUFDQSxVQUFTLENBQUMsYUFBYSxXQUFXLE1BQVgsR0FBb0IsQ0FBakMsQ0FBRCxHQUF1QyxZQUF2QyxDQUp5RTtBQUt0RixZQUFJLE9BQUosRUFBYTs7QUFFWCxtQkFBUyxlQUFlLENBQWYsQ0FBVCxHQUE2QixTQUE3QixDQUZXO1NBQWI7O0FBS0EsWUFBSSxTQUFTLFdBQVcsUUFBUSxNQUFSLEdBQWlCLENBQWpCLEdBQXFCLE1BQXJCO1lBQ3BCLFlBQVksY0FBYyxLQUFLLE9BQUwsSUFBZSxVQUFTLE1BQVQsQ0FYeUM7QUFZdEYsWUFBSSxDQUFDLE1BQUQsSUFBVyxDQUFDLFNBQUQsRUFBWTs7QUFFekIsbUJBQVMsWUFBVCxJQUF5QixTQUF6QixDQUZ5QjtBQUd6QixtQkFIeUI7U0FBM0I7Ozs7O0FBWnNGLFlBcUJsRixDQUFDLE1BQUQsSUFBWSxhQUFhLFFBQVEsTUFBUixHQUFpQixXQUFXLE1BQVgsRUFBb0I7QUFDaEUscUJBQVcsVUFBVSxVQUFWLENBQVgsQ0FEZ0U7QUFFaEUsZUFBSyxhQUFMLENBQW1CLFNBQVMsVUFBVCxFQUFxQixTQUF4QyxFQUFtRCxJQUFuRCxFQUZnRTtTQUFsRSxNQUdPO0FBQ0wscUJBQVcsT0FBWDtBQURLLGtCQUVMLENBQVMsTUFBVCxHQUZLO0FBR0wsZUFBSyxhQUFMLENBQW1CLFNBQVMsVUFBVCxFQUFxQixJQUF4QyxFQUE4QyxTQUE5QyxFQUhLO1NBSFA7O0FBU0Esa0JBQVMsS0FBSyxhQUFMLENBQW1CLFFBQW5CLEVBQTZCLFNBQTdCLEVBQXdDLFNBQXhDLEVBQW1ELFlBQW5ELENBQVQ7OztBQTlCc0YsWUFpQ2xGLFNBQVMsTUFBVCxHQUFrQixDQUFsQixJQUF1QixNQUF2QixJQUFpQyxVQUFTLENBQVQsSUFBYyxNQUFkLEVBQXNCO0FBQ3pELGlCQUFPLEtBQUssWUFBWSxJQUFaLEVBQWtCLFNBQVMsVUFBVCxFQUFxQixTQUF2QyxFQUFrRCxTQUFsRCxFQUE2RCxLQUFLLGVBQUwsQ0FBbEUsQ0FBUCxDQUR5RDtTQUEzRCxNQUVPOztBQUVMLG1CQUFTLFlBQVQsSUFBeUIsUUFBekIsQ0FGSztTQUZQO09BakNGOztBQXlDQSxtQkExQ3dCO0tBQTFCOzs7OztBQXZDdUMsUUF1Rm5DLFFBQUosRUFBYztBQUNaLE9BQUMsU0FBUyxJQUFULEdBQWdCO0FBQ2YsbUJBQVcsWUFBVzs7O0FBR3BCLGNBQUksYUFBYSxhQUFiLEVBQTRCO0FBQzlCLG1CQUFPLFVBQVAsQ0FEOEI7V0FBaEM7O0FBSUEsY0FBSSxDQUFDLGdCQUFELEVBQW1CO0FBQ3JCLG1CQURxQjtXQUF2QjtTQVBTLEVBVVIsQ0FWSCxFQURlO09BQWhCLEdBQUQsQ0FEWTtLQUFkLE1BY087QUFDTCxhQUFPLGNBQWMsYUFBZCxFQUE2QjtBQUNsQyxZQUFJLE1BQU0sZ0JBQU4sQ0FEOEI7QUFFbEMsWUFBSSxHQUFKLEVBQVM7QUFDUCxpQkFBTyxHQUFQLENBRE87U0FBVDtPQUZGO0tBZkY7R0F4RmE7bURBZ0hmLHNDQUFjLFlBQVksT0FBTyxTQUFTO0FBQ3hDLFFBQUksT0FBTyxXQUFXLFdBQVcsTUFBWCxHQUFvQixDQUFwQixDQUFsQixDQURvQztBQUV4QyxRQUFJLFFBQVEsS0FBSyxLQUFMLEtBQWUsS0FBZixJQUF3QixLQUFLLE9BQUwsS0FBaUIsT0FBakIsRUFBMEI7OztBQUc1RCxpQkFBVyxXQUFXLE1BQVgsR0FBb0IsQ0FBcEIsQ0FBWCxHQUFvQyxFQUFDLE9BQU8sS0FBSyxLQUFMLEdBQWEsQ0FBYixFQUFnQixPQUFPLEtBQVAsRUFBYyxTQUFTLE9BQVQsRUFBMUUsQ0FINEQ7S0FBOUQsTUFJTztBQUNMLGlCQUFXLElBQVgsQ0FBZ0IsRUFBQyxPQUFPLENBQVAsRUFBVSxPQUFPLEtBQVAsRUFBYyxTQUFTLE9BQVQsRUFBekMsRUFESztLQUpQO0dBbEhhO21EQTBIZixzQ0FBYyxVQUFVLFdBQVcsV0FBVyxjQUFjO0FBQzFELFFBQUksU0FBUyxVQUFVLE1BQVY7UUFDVCxTQUFTLFVBQVUsTUFBVjtRQUNULFNBQVMsU0FBUyxNQUFUO1FBQ1QsU0FBUyxTQUFTLFlBQVQ7UUFFVCxjQUFjLENBQWQsQ0FOc0Q7QUFPMUQsV0FBTyxTQUFTLENBQVQsR0FBYSxNQUFiLElBQXVCLFNBQVMsQ0FBVCxHQUFhLE1BQWIsSUFBdUIsS0FBSyxNQUFMLENBQVksVUFBVSxTQUFTLENBQVQsQ0FBdEIsRUFBbUMsVUFBVSxTQUFTLENBQVQsQ0FBN0MsQ0FBOUMsRUFBeUc7QUFDOUcsZUFEOEc7QUFFOUcsZUFGOEc7QUFHOUcsb0JBSDhHO0tBQWhIOztBQU1BLFFBQUksV0FBSixFQUFpQjtBQUNmLGVBQVMsVUFBVCxDQUFvQixJQUFwQixDQUF5QixFQUFDLE9BQU8sV0FBUCxFQUExQixFQURlO0tBQWpCOztBQUlBLGFBQVMsTUFBVCxHQUFrQixNQUFsQixDQWpCMEQ7QUFrQjFELFdBQU8sTUFBUCxDQWxCMEQ7R0ExSDdDO21EQStJZix3QkFBTyxNQUFNLE9BQU87QUFDbEIsV0FBTyxTQUFTLEtBQVQsQ0FEVztHQS9JTDttREFrSmYsa0NBQVksT0FBTztBQUNqQixRQUFJLE1BQU0sRUFBTixDQURhO0FBRWpCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3JDLFVBQUksTUFBTSxDQUFOLENBQUosRUFBYztBQUNaLFlBQUksSUFBSixDQUFTLE1BQU0sQ0FBTixDQUFULEVBRFk7T0FBZDtLQURGO0FBS0EsV0FBTyxHQUFQLENBUGlCO0dBbEpKO21EQTJKZiw4QkFBVSxPQUFPO0FBQ2YsV0FBTyxLQUFQLENBRGU7R0EzSkY7bURBOEpmLDRCQUFTLE9BQU87QUFDZCxXQUFPLE1BQU0sS0FBTixDQUFZLEVBQVosQ0FBUCxDQURjO0dBOUpEO0NBQWpCOztBQW1LQSxTQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsVUFBM0IsRUFBdUMsU0FBdkMsRUFBa0QsU0FBbEQsRUFBNkQsZUFBN0QsRUFBOEU7QUFDNUUsTUFBSSxlQUFlLENBQWY7TUFDQSxlQUFlLFdBQVcsTUFBWDtNQUNmLFNBQVMsQ0FBVDtNQUNBLFNBQVMsQ0FBVCxDQUp3RTs7QUFNNUUsU0FBTyxlQUFlLFlBQWYsRUFBNkIsY0FBcEMsRUFBb0Q7QUFDbEQsUUFBSSxZQUFZLFdBQVcsWUFBWCxDQUFaLENBRDhDO0FBRWxELFFBQUksQ0FBQyxVQUFVLE9BQVYsRUFBbUI7QUFDdEIsVUFBSSxDQUFDLFVBQVUsS0FBVixJQUFtQixlQUFwQixFQUFxQztBQUN2QyxZQUFJLFFBQVEsVUFBVSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLFNBQVMsVUFBVSxLQUFWLENBQXpDLENBRG1DO0FBRXZDLGdCQUFRLE1BQU0sR0FBTixDQUFVLFVBQVMsS0FBVCxFQUFnQixDQUFoQixFQUFtQjtBQUNuQyxjQUFJLFdBQVcsVUFBVSxTQUFTLENBQVQsQ0FBckIsQ0FEK0I7QUFFbkMsaUJBQU8sU0FBUyxNQUFULEdBQWtCLE1BQU0sTUFBTixHQUFlLFFBQWpDLEdBQTRDLEtBQTVDLENBRjRCO1NBQW5CLENBQWxCLENBRnVDOztBQU92QyxrQkFBVSxLQUFWLEdBQWtCLE1BQU0sSUFBTixDQUFXLEVBQVgsQ0FBbEIsQ0FQdUM7T0FBekMsTUFRTztBQUNMLGtCQUFVLEtBQVYsR0FBa0IsVUFBVSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLFNBQVMsVUFBVSxLQUFWLENBQWpDLENBQWtELElBQWxELENBQXVELEVBQXZELENBQWxCLENBREs7T0FSUDtBQVdBLGdCQUFVLFVBQVUsS0FBVjs7O0FBWlksVUFlbEIsQ0FBQyxVQUFVLEtBQVYsRUFBaUI7QUFDcEIsa0JBQVUsVUFBVSxLQUFWLENBRFU7T0FBdEI7S0FmRixNQWtCTztBQUNMLGdCQUFVLEtBQVYsR0FBa0IsVUFBVSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLFNBQVMsVUFBVSxLQUFWLENBQWpDLENBQWtELElBQWxELENBQXVELEVBQXZELENBQWxCLENBREs7QUFFTCxnQkFBVSxVQUFVLEtBQVY7Ozs7O0FBRkwsVUFPRCxnQkFBZ0IsV0FBVyxlQUFlLENBQWYsQ0FBWCxDQUE2QixLQUE3QixFQUFvQztBQUN0RCxZQUFJLE1BQU0sV0FBVyxlQUFlLENBQWYsQ0FBakIsQ0FEa0Q7QUFFdEQsbUJBQVcsZUFBZSxDQUFmLENBQVgsR0FBK0IsV0FBVyxZQUFYLENBQS9CLENBRnNEO0FBR3RELG1CQUFXLFlBQVgsSUFBMkIsR0FBM0IsQ0FIc0Q7T0FBeEQ7S0F6QkY7R0FGRjs7OztBQU40RSxNQTJDeEUsZ0JBQWdCLFdBQVcsZUFBZSxDQUFmLENBQTNCLENBM0N3RTtBQTRDNUUsTUFBSSxlQUFlLENBQWYsS0FDSSxjQUFjLEtBQWQsSUFBdUIsY0FBYyxPQUFkLENBRDNCLElBRUcsS0FBSyxNQUFMLENBQVksRUFBWixFQUFnQixjQUFjLEtBQWQsQ0FGbkIsRUFFeUM7QUFDM0MsZUFBVyxlQUFlLENBQWYsQ0FBWCxDQUE2QixLQUE3QixJQUFzQyxjQUFjLEtBQWQsQ0FESztBQUUzQyxlQUFXLEdBQVgsR0FGMkM7R0FGN0M7O0FBT0EsU0FBTyxVQUFQLENBbkQ0RTtDQUE5RTs7QUFzREEsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU8sRUFBRSxRQUFRLEtBQUssTUFBTCxFQUFhLFlBQVksS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQXNCLENBQXRCLENBQVosRUFBOUIsQ0FEdUI7Q0FBekIiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpZmYoKSB7fVxuXG5EaWZmLnByb3RvdHlwZSA9IHtcbiAgZGlmZihvbGRTdHJpbmcsIG5ld1N0cmluZywgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGRvbmUodmFsdWUpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayh1bmRlZmluZWQsIHZhbHVlKTsgfSwgMCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFsbG93IHN1YmNsYXNzZXMgdG8gbWFzc2FnZSB0aGUgaW5wdXQgcHJpb3IgdG8gcnVubmluZ1xuICAgIG9sZFN0cmluZyA9IHRoaXMuY2FzdElucHV0KG9sZFN0cmluZyk7XG4gICAgbmV3U3RyaW5nID0gdGhpcy5jYXN0SW5wdXQobmV3U3RyaW5nKTtcblxuICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XG5cbiAgICBsZXQgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCwgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aDtcbiAgICBsZXQgZWRpdExlbmd0aCA9IDE7XG4gICAgbGV0IG1heEVkaXRMZW5ndGggPSBuZXdMZW4gKyBvbGRMZW47XG4gICAgbGV0IGJlc3RQYXRoID0gW3sgbmV3UG9zOiAtMSwgY29tcG9uZW50czogW10gfV07XG5cbiAgICAvLyBTZWVkIGVkaXRMZW5ndGggPSAwLCBpLmUuIHRoZSBjb250ZW50IHN0YXJ0cyB3aXRoIHRoZSBzYW1lIHZhbHVlc1xuICAgIGxldCBvbGRQb3MgPSB0aGlzLmV4dHJhY3RDb21tb24oYmVzdFBhdGhbMF0sIG5ld1N0cmluZywgb2xkU3RyaW5nLCAwKTtcbiAgICBpZiAoYmVzdFBhdGhbMF0ubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgIC8vIElkZW50aXR5IHBlciB0aGUgZXF1YWxpdHkgYW5kIHRva2VuaXplclxuICAgICAgcmV0dXJuIGRvbmUoW3t2YWx1ZTogbmV3U3RyaW5nLmpvaW4oJycpLCBjb3VudDogbmV3U3RyaW5nLmxlbmd0aH1dKTtcbiAgICB9XG5cbiAgICAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG4gICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICBmb3IgKGxldCBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgIGxldCBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICBvbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG4gICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBvbGRQb3MgJiYgb2xkUG9zIDwgb2xkTGVuO1xuICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuICAgICAgICBpZiAoIWNhbkFkZCB8fCAoY2FuUmVtb3ZlICYmIGFkZFBhdGgubmV3UG9zIDwgcmVtb3ZlUGF0aC5uZXdQb3MpKSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAgIC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRQb3MgPSBzZWxmLmV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgICAgIGlmIChiYXNlUGF0aC5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWRpdExlbmd0aCsrO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgIC8vIGlzIHByb2R1Y2VkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8gYmUgc2FmZS5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgbGV0IHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICBsZXQgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgaGVyZSBhcyB0aGUgY29tcG9uZW50IGNsb25lIG9wZXJhdGlvbiBpcyBqdXN0XG4gICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7Y291bnQ6IGxhc3QuY291bnQgKyAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50cy5wdXNoKHtjb3VudDogMSwgYWRkZWQ6IGFkZGVkLCByZW1vdmVkOiByZW1vdmVkIH0pO1xuICAgIH1cbiAgfSxcbiAgZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcblxuICAgICAgICBjb21tb25Db3VudCA9IDA7XG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgIG5ld1BvcysrO1xuICAgICAgb2xkUG9zKys7XG4gICAgICBjb21tb25Db3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtjb3VudDogY29tbW9uQ291bnR9KTtcbiAgICB9XG5cbiAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgcmV0dXJuIG9sZFBvcztcbiAgfSxcblxuICBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG4gIH0sXG4gIHJlbW92ZUVtcHR5KGFycmF5KSB7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSkge1xuICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIGNhc3RJbnB1dCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgdG9rZW5pemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gIGxldCBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICBuZXdQb3MgPSAwLFxuICAgICAgb2xkUG9zID0gMDtcblxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XG4gICAgICAgICAgbGV0IG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQudmFsdWUgPSB2YWx1ZS5qb2luKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkuam9pbignJyk7XG4gICAgICB9XG4gICAgICBuZXdQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuXG4gICAgICAvLyBDb21tb24gY2FzZVxuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LnZhbHVlID0gb2xkU3RyaW5nLnNsaWNlKG9sZFBvcywgb2xkUG9zICsgY29tcG9uZW50LmNvdW50KS5qb2luKCcnKTtcbiAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG5cbiAgICAgIC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXG4gICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgLy8gcm91dGUgdG8gZ2V0IHRoZSBkZXNpcmVkIG91dHB1dCB3aXRoIG1pbmltYWwgb3ZlcmhlYWQuXG4gICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgbGV0IHRtcCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV07XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0gPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkLiBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZVxuICAvLyB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgbGV0IGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDFdO1xuICBpZiAoY29tcG9uZW50TGVuID4gMVxuICAgICAgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKVxuICAgICAgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBsYXN0Q29tcG9uZW50LnZhbHVlO1xuICAgIGNvbXBvbmVudHMucG9wKCk7XG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHsgbmV3UG9zOiBwYXRoLm5ld1BvcywgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApIH07XG59XG4iXX0=


/***/ }),

/***/ 2673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoResultFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

NoResultFound = class NoResultFound extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'no-result' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'no-result-image-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'no-result-image' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'label' }, 'Nothing here, Houston!'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'subtext' }, 'We couldn\'t find anything matching that. Check the spelling or try using a different query.')));


  }};

/***/ }),

/***/ 2699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableAlertWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_SettingsTypeConstants__ = __webpack_require__(1110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_messaging_Alert__ = __webpack_require__(2659);
var _class;






const OPEN_SETTINGS_ANCHOR = '#openSettings',
alertMessageWithAutoPersist = 'Use variables to reuse values in different places. ' +
'The current value is used while sending a request and is never synced to Postman\'s servers. ' +
`The initial value is auto-updated to reflect the current value. [Change this](${OPEN_SETTINGS_ANCHOR}) behaviour from Settings. ` +
`[Learn more about variable values](${__WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["O" /* SESSION_VARIABLE_DOCS */]})`,
alertMessageWithoutAutoPersist = 'Use variables to reuse values in different places. Work with the current value of a variable' +
` to prevent sharing sensitive values with your team. [Learn more about variable values](${__WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["O" /* SESSION_VARIABLE_DOCS */]})`;let


VariableAlertWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class VariableAlertWrapper extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleMessageLinkClick = this.handleMessageLinkClick.bind(this);
    this.handleDismissAlert = this.handleDismissAlert.bind(this);
    this.state = { showAlert: pm.settings.getSetting('showSessionVariablesAlert') };

    this.handleSettingUpdate = this.handleSettingUpdate.bind(this);
  }

  componentDidMount() {
    pm.settings.on('setSetting:showSessionVariablesAlert', this.handleSettingUpdate);
  }

  componentWillUnmount() {
    pm.settings.off('setSetting:showSessionVariablesAlert', this.handleSettingUpdate);
  }

  handleMessageLinkClick(target) {
    if (target === OPEN_SETTINGS_ANCHOR) {
      pm.mediator.trigger('openSettingsModal', __WEBPACK_IMPORTED_MODULE_3__constants_SettingsTypeConstants__["e" /* SETTINGS_GENERAL */]);
    }
    this.props.onMessageLinkClick && this.props.onMessageLinkClick(target);
  }

  handleDismissAlert() {
    pm.settings.setSetting('showSessionVariablesAlert', false);
  }

  handleSettingUpdate() {
    this.setState({ showAlert: pm.settings.getSetting('showSessionVariablesAlert') });
  }

  render() {
    let configMap = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ConfigurationStore').configs,
    alertMessage = configMap.get('request.autoPersistVariables') ?
    alertMessageWithAutoPersist : alertMessageWithoutAutoPersist;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className },

        this.state.showAlert &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_messaging_Alert__["a" /* default */], {
          type: 'info',
          message: alertMessage,
          onMessageLinkClick: this.handleMessageLinkClick,
          onDismiss: this.handleDismissAlert })));




  }}) || _class;

/***/ }),

/***/ 2731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ProfilePic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Meta; });
/* unused harmony export Body */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Restore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Avatar__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_ActivityFeedDetailsMapConstant__ = __webpack_require__(2842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ActivityFeedDetailsComponents__ = __webpack_require__(3183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(6);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;








let

Header = class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-header' },
        this.props.children));


  }};let


Heading = class Heading extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-heading' },
        this.props.children));


  }};let


ProfilePic = class ProfilePic extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-profile-pic-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Avatar__["a" /* default */], { type: 'user', userId: this.props.id })));


  }};let


Meta = class Meta extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-meta' },
        this.props.children));


  }};let


Body = class Body extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-body' },
        this.props.children));


  }};let


Folder = class Folder extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'folder',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-folder',
          onClick: this.handleClick },
        this.props.name));

  }};let


Response = class Response extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'response',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-response',
          onClick: this.handleClick },
        this.props.name));

  }};let


Request = class Request extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: '`request`',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    let methodClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    'activity-item-request-method',
    `method-${this.props.method}`);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-request-name', onClick: this.handleClick },
        this.props.name));


  }};let


Collection = class Collection extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'collection',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    let methodClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    'activity-item-collection-method',
    `method-${this.props.method}`),

    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

        meta.model === 'collection' ?
        ' this ' :
        !_.isEmpty(this.props.name) ?
        ' the ' :
        ' a ',

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'collection '),

        meta.model === 'workspace' &&
        !_.isEmpty(this.props.name) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-collection-name', onClick: this.handleClick }, this.props.name)));



  }};let



User = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class User extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    let displayName = currentUser.id === this.props.id ? 'You' : this.props.name || this.props.username;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-user' }, displayName, ','));

  }}) || _class;let


Time = class Time extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let formattedTime = __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default.a.getFormattedTime(this.props.timestamp);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-time' }, formattedTime));

  }};let


Details = class Details extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  filterEntity(entity, data) {
    if (_.includes(['test', 'prerequest'], entity)) {
      return this.processEvents(entity, data);
    }
    return data;
  }

  processEvents(processDataType, data) {
    let sdkEvents = new __WEBPACK_IMPORTED_MODULE_3_postman_collection__["EventList"]({}, data),
    entityEvent = _.head(sdkEvents.listenersOwn(processDataType));

    return _.invoke(entityEvent, 'script.toSource');
  }

  render() {
    let {
      input = {},
      rollback = {},
      model,
      instance,
      detailsError = false } =
    this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-details-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-details' },

          _.map(__WEBPACK_IMPORTED_MODULE_5__constants_ActivityFeedDetailsMapConstant__["a" /* default */], (activity, index) => {
            let entity = activity.entity,
            previous = rollback[entity],
            current = input[entity],
            filterEntity = activity.filterEntity,
            isChangeSetAvailable = false;

            if (filterEntity) {
              previous = this.filterEntity(filterEntity, previous);
              current = this.filterEntity(filterEntity, current);
            }

            isChangeSetAvailable = previous || current;

            if (isChangeSetAvailable && entity === 'order') {
              previous = null;
              current = 'Changed';
            }
            if (isChangeSetAvailable) {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ActivityFeedDetailsComponents__["a" /* DetailsItem */], _extends({
                  key: activity.entity + index,
                  previous: previous || '',
                  current: current || '',
                  model: model,
                  name: instance.name || '' },
                activity)));


            }
            return false;
          }))));




  }};let


Restore = class Restore extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRestore && this.props.onRestore(this.props.id);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'activity-item-restore': true,
      'activity-item-restore--is-restoring': this.props.isRestoring });

  }

  render() {
    if (_.isNil(this.props.id) ||
    _.isNil(this.props.rollback_from) ||
    this.props.id < this.props.rollback_from) {
      return false;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getClasses(), onClick: this.handleClick },
        this.props.isRestoring ? 'Restoring...' : 'Restore'));


  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(203);


let

CollectionsEmpty = class CollectionsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleAddToWorkspace = this.handleAddToWorkspace.bind(this);
    this.handleCreateCollection = this.handleCreateCollection.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleCreateCollection() {
    this.props.onClose && this.props.onClose();
    if (this.props.isMember) {
      pm.mediator.trigger('showNewCollectionModal', id => {
        pm.mediator.trigger('focusCollectionInSideBar', id);
      });
    } else
    {
      pm.mediator.trigger('joinWorkspace');
    }
  }

  openLink(url) {
    url && pm.app.openExternalLink(url);
  }

  handleAddToWorkspace() {
    if (this.props.isMember) {
      pm.mediator.trigger('openBulkAddToWorkspaceModal', this.props.workspaceId);
    } else
    {
      pm.mediator.trigger('joinWorkspace');
    }
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--collections' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'Looks like you don\u2019t have any collections'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'API requests in Postman are saved in '),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              className: 'learn-more-link',
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["f" /* COLLECTION_DOCS */]) }, 'Collections'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, '. Collections make it easier to organize, test, document and monitor requests. Save some requests in a collection to get started.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleAddToWorkspace }, 'Add collections to this workspace')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action--text' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleCreateCollection }, 'or create a collection'))));






  }};

/***/ }),

/***/ 2755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = sanitizeVariableValue;
const allowedVariableFieldKeys = ['key', 'value', 'type', 'description', 'enabled'];

/**
                                                                                      * Sanitizes the environment/globals values
                                                                                      * @TODO Update this to follow the schema
                                                                                      * @param {Array<Object>} values
                                                                                      * @returns {Object} sanitized variable value
                                                                                      */
function sanitizeVariableValue(value) {
  return _.pick(value, allowedVariableFieldKeys);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.lineDiff = undefined;
exports. /*istanbul ignore end*/diffLines = diffLines;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = diffTrimmedLines;

var /*istanbul ignore start*/_base = __webpack_require__(2672) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

/*istanbul ignore end*/
var /*istanbul ignore start*/_params = __webpack_require__(2844) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/var lineDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/lineDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
lineDiff.tokenize = function (value) {
  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/);

  // Ignore the final empty token that occurs if the string ends with a new line
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }

  // Merge the content and line separators into single tokens
  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }
      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}
function diffTrimmedLines(oldStr, newStr, callback) {
  var options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(callback, { ignoreWhitespace: true });
  return lineDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztnQ0E4QmdCO3lEQUNBOztBQS9CaEI7Ozs7OztBQUNBOzs7Ozt1QkFFTyxJQUFNLCtFQUFXLHFFQUFYO0FBQ2IsU0FBUyxRQUFULEdBQW9CLFVBQVMsS0FBVCxFQUFnQjtBQUNsQyxNQUFJLFdBQVcsRUFBWDtNQUNBLG1CQUFtQixNQUFNLEtBQU4sQ0FBWSxXQUFaLENBQW5COzs7QUFGOEIsTUFLOUIsQ0FBQyxpQkFBaUIsaUJBQWlCLE1BQWpCLEdBQTBCLENBQTFCLENBQWxCLEVBQWdEO0FBQ2xELHFCQUFpQixHQUFqQixHQURrRDtHQUFwRDs7O0FBTGtDLE9BVTdCLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxpQkFBaUIsTUFBakIsRUFBeUIsR0FBN0MsRUFBa0Q7QUFDaEQsUUFBSSxPQUFPLGlCQUFpQixDQUFqQixDQUFQLENBRDRDOztBQUdoRCxRQUFJLElBQUksQ0FBSixJQUFTLENBQUMsS0FBSyxPQUFMLENBQWEsY0FBYixFQUE2QjtBQUN6QyxlQUFTLFNBQVMsTUFBVCxHQUFrQixDQUFsQixDQUFULElBQWlDLElBQWpDLENBRHlDO0tBQTNDLE1BRU87QUFDTCxVQUFJLEtBQUssT0FBTCxDQUFhLGdCQUFiLEVBQStCO0FBQ2pDLGVBQU8sS0FBSyxJQUFMLEVBQVAsQ0FEaUM7T0FBbkM7QUFHQSxlQUFTLElBQVQsQ0FBYyxJQUFkLEVBSks7S0FGUDtHQUhGOztBQWFBLFNBQU8sUUFBUCxDQXZCa0M7Q0FBaEI7O0FBMEJiLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixNQUEzQixFQUFtQyxRQUFuQyxFQUE2QztBQUFFLFNBQU8sU0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixRQUE5QixDQUFQLENBQUY7Q0FBN0M7QUFDQSxTQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLE1BQWxDLEVBQTBDLFFBQTFDLEVBQW9EO0FBQ3pELE1BQUksVUFBVSw4RUFBZ0IsUUFBaEIsRUFBMEIsRUFBQyxrQkFBa0IsSUFBbEIsRUFBM0IsQ0FBVixDQURxRDtBQUV6RCxTQUFPLFNBQVMsSUFBVCxDQUFjLE1BQWQsRUFBc0IsTUFBdEIsRUFBOEIsT0FBOUIsQ0FBUCxDQUZ5RDtDQUFwRCIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5lRGlmZiA9IG5ldyBEaWZmKCk7XG5saW5lRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGxldCByZXRMaW5lcyA9IFtdLFxuICAgICAgbGluZXNBbmROZXdsaW5lcyA9IHZhbHVlLnNwbGl0KC8oXFxufFxcclxcbikvKTtcblxuICAvLyBJZ25vcmUgdGhlIGZpbmFsIGVtcHR5IHRva2VuIHRoYXQgb2NjdXJzIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIGEgbmV3IGxpbmVcbiAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICBsaW5lc0FuZE5ld2xpbmVzLnBvcCgpO1xuICB9XG5cbiAgLy8gTWVyZ2UgdGhlIGNvbnRlbnQgYW5kIGxpbmUgc2VwYXJhdG9ycyBpbnRvIHNpbmdsZSB0b2tlbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxpbmUgPSBsaW5lc0FuZE5ld2xpbmVzW2ldO1xuXG4gICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICB9XG4gICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRMaW5lcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICBsZXQgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhjYWxsYmFjaywge2lnbm9yZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xufVxuIl19


/***/ }),

/***/ 2765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActivityFeedDetailsMapConstant__ = __webpack_require__(2842);
let

ActivityFeedHelper = class ActivityFeedHelper {

  getWhiteListedActivitiesCount(activity) {
    let changesCount = 0;
    if (activity.rollback && activity.input) {
      _.forEach(__WEBPACK_IMPORTED_MODULE_0__constants_ActivityFeedDetailsMapConstant__["a" /* default */], supportedActivity => {
        let entity = supportedActivity.entity;
        if (activity.rollback[entity] || activity.input[entity]) {
          ++changesCount;
        }
      });
    }
    return changesCount;
  }};


/* harmony default export */ __webpack_exports__["a"] = (new ActivityFeedHelper());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeSwitcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_RequesterTabConstants__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WorkspaceTypeSwitcherIntro__ = __webpack_require__(2904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Tooltips__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__ = __webpack_require__(26);










let

TypeSwitcher = class TypeSwitcher extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.state = { isTooltipVisible: false };

    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  getSwitchClasses(viewMode) {
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
      'plugin__workspace-view-switcher__switch': true,
      left: viewMode === this.props.items[0].key,
      right: viewMode === this.props.items[1].key });

  }

  getActiveItemClasses(position) {
    let positionClass = `plugin__workspace-view-switcher__switch__item--${position}`;

    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
      'plugin__workspace-view-switcher__switch__item': true,
      [positionClass]: true });

  }

  getWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
      'plugin__workspace-view-switcher__wrapper': true,
      'disabled': this.props.disabled });

  }

  getActiveItemLabel() {
    let activeItem = _.find(this.props.items, ['key', this.props.activeItem]);

    if (activeItem) {
      return activeItem.label;
    }

    return '';
  }

  handleSelect(item) {
    !this.props.disabled && this.props.onSelect && this.props.onSelect(item);
  }

  showTooltip() {
    this.setState({ isTooltipVisible: true });
  }

  hideTooltip() {
    this.setState({ isTooltipVisible: false });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'workspaceViewToggle' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            ref: 'tooltipTarget',
            onMouseEnter: this.props.isTooltipEnabled && this.showTooltip || _.noop,
            onMouseLeave: this.props.isTooltipEnabled && this.hideTooltip || _.noop },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getWrapperClasses() },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSwitchClasses(this.props.activeItem) },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                  className: 'plugin__workspace-view-active-item' },

                this.getActiveItemLabel())),



            _.map(this.props.items, item => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                    key: item.key,
                    onClick: this.handleSelect.bind(this, item.key),
                    className: this.getActiveItemClasses(item.position) },

                  item.label));


            })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Tooltips__["a" /* Tooltip */], {
              show: this.state.isTooltipVisible,
              target: this.refs.tooltipTarget,
              placement: this.props.placement,
              immediate: true },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Tooltips__["b" /* TooltipBody */], null,
              this.props.tooltipText)))));





  }};


TypeSwitcher.defaultProps = {
  isTooltipEnabled: false,
  placement: 'right',
  tooltipText: '' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__export_single__ = __webpack_require__(2823);


/* harmony default export */ __webpack_exports__["a"] = ({ exportSingle: __WEBPACK_IMPORTED_MODULE_0__export_single__["a" /* default */] });

/***/ }),

/***/ 2823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(3085);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(2824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(3086);




const COLLECTION = 'collection',
ENVIRONMENT = 'environment',
GLOBALS = 'globals',
TYPE_JSON = 'json',
DEFAULT_FILE_NAME_EXT = '.json',
exportModels = {
  [COLLECTION]: __WEBPACK_IMPORTED_MODULE_0__collection__["a" /* default */],
  [ENVIRONMENT]: __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* default */],
  [GLOBALS]: __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* default */] };


/**
                         * Exports a model (collection, environment or globals)
                         * @param {String} model
                         * @param {Object} criteria
                         * @param {Object} exportOptions
                         * @returns {Promise} which resolves in an object having name, type and data
                         */
/* harmony default export */ __webpack_exports__["a"] = (function (model, criteria, exportOptions) {
  let populatedEntity,
  entityName,
  fileName,
  exportModel = exportModels[model],
  context = {
    appVersion: pm.app.get('info').version,
    exportOptions };


  if (!exportModel) {
    return Promise.reject(new Error(`Export: unsupported model: '${model}'`));
  }

  return Promise.resolve()

  // Fetch the model from db
  .then(() => {
    return exportModel.getFromDb(criteria);
  })

  // Fetch the context (optional step)
  .then(entity => {
    if (!entity) {
      return Promise.reject(new Error(`Export: received empty entity for model: ${model} for criteria ${JSON.stringify(criteria)}`));
    }

    populatedEntity = entity;

    if (exportModel.getContext) {
      return exportModel.getContext(criteria);
    }
  })

  // cache the context
  .then(ctx => {
    _.merge(context, ctx);
  })

  // get the entity name and file name to be exported
  .then(() => {
    exportModel.getEntityName ?
    entityName = exportModel.getEntityName(populatedEntity, context) :
    entityName = model;
    exportModel.getFileName ?
    fileName = exportModel.getFileName(populatedEntity, context) :
    fileName = model + DEFAULT_FILE_NAME_EXT;
  })

  // sanitize the entity
  // this step MUST not mutate the entity
  .then(() => {
    if (exportModel.sanitize) {
      return exportModel.sanitize(populatedEntity, context);
    }
    return populatedEntity;
  })

  // transform the data to the exportable format
  // for collection it will first convert to v1 format then optionally to v2/v.2.1
  // for environment/globals it will add the extra meta properties
  .then(sanitizedEntity => {
    if (!exportModel.transform) {
      return sanitizedEntity;
    }

    return exportModel.transform(sanitizedEntity, context);
  })

  // return the data
  .then(transformedData => {
    return {
      type: TYPE_JSON,
      json: transformedData,
      meta: {
        name: entityName,
        fileName: fileName } };


  });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_controllers_EnvironmentController__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2755);



const ENVIRONMENT = 'environment',
EXPORTED_USING_PREFIX = 'Postman/',
FILE_NAME_EXT = '.postman_environment.json',
TAB = '\t',
allowedEnvFields = ['id', 'name', 'values', 'timestamp', '_postman_variable_scope'];

/**
                                                                                      * Gets the environment from the db
                                                                                      * @param {Object} criteria
                                                                                      */
function getFromDb(criteria) {
  return __WEBPACK_IMPORTED_MODULE_0__modules_controllers_EnvironmentController__["a" /* default */].get(criteria);
}

/**
   * Sanitizes the environment before exporting
   * @param {Object} environment
   */
function sanitize(environment) {
  let sanitizedEnv = _.pick(environment, allowedEnvFields);
  sanitizedEnv.values = _.map(sanitizedEnv.values, __WEBPACK_IMPORTED_MODULE_1__util__["a" /* sanitizeVariableValue */]);

  return sanitizedEnv;
}

/**
   * This transforms the environment into the exportable format
   * It adds few meta properties
   * @param {Object} environment
   * @returns {Promise} Which resolves in the transformed environment
   */
function transform(environment, context = {}) {
  return Promise.resolve(
  _.merge({}, environment, {
    _postman_variable_scope: ENVIRONMENT,
    _postman_exported_at: new Date().toISOString(),
    _postman_exported_using: EXPORTED_USING_PREFIX + context.appVersion }));


}

/**
   * Returns the entity name
   * @param {Object} environment
   */
function getEntityName(environment) {
  return environment.name || ENVIRONMENT;
}

/**
   * Returns the fileName that can be used if exporting to a file
   * @param {Object} environment
   */
function getFileName(environment) {
  return this.getEntityName(environment) + FILE_NAME_EXT;
}

/**
   * Serializes the environment
   * @param {Object} environment
   * @returns {String} Stringified environment
   */
function serialize(environment) {
  return JSON.stringify(environment, null, TAB);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getFromDb,
  sanitize,
  transform,
  getEntityName,
  getFileName,
  serialize });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_controllers_CollectionController__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_EnvironmentController__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_GlobalsController__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_HeaderPresetController__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceController__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_export_environment__ = __webpack_require__(2824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_export_header_preset__ = __webpack_require__(3087);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_services_filesystem__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_util__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_export_export_single__ = __webpack_require__(2823);












const COLLECTION = 'collection',
DEFAULT_WORKSPACE_NAME = 'Workspace',
GLOBALS_NAME_SUFFIX = ' - globals',
TAB = '\t',
EXPORTED_FILENAME = 'Backup.postman_dump.json',
EXPORTED_FILETYPE = 'application/json';

const EXPORT_STATE = {
  SUCCESS: __WEBPACK_IMPORTED_MODULE_8__models_services_filesystem__["a" /* STATE */].SUCCESS,
  ABORTED: __WEBPACK_IMPORTED_MODULE_8__models_services_filesystem__["a" /* STATE */].ABORTED };
/* harmony export (immutable) */ __webpack_exports__["a"] = EXPORT_STATE;



/**
                             * Exports a model (collection, environment or globals)
                             * @param {Object} options
                             * @param {String} options.exportLevel One of 'all' or 'user'
                             * @returns {Promise<Object>} which resolves in an object having version, collections, environments, globals and headerPresets
                             */
/* harmony default export */ __webpack_exports__["b"] = (function (options = {}) {
  let userId,
  dump = {
    version: 1,
    collections: [],
    environments: [],
    headerPresets: [],
    globals: [] },

  workspaces,
  dumpCollections,
  dumpEnvironments,
  dumpGlobals,
  dumpHeaderPresets;

  dumpCollections = function () {
    return Promise.resolve()

    // Get all the collections from db
    .then(() => {
      return __WEBPACK_IMPORTED_MODULE_0__modules_controllers_CollectionController__["a" /* default */].getCollections();
    })

    // filter the collection for the user (only if the exportLevel is user)
    .then(collections => {
      if (options.exportLevel !== 'user') {
        return collections;
      }

      return _.filter(collections, ['owner', userId]);
    })

    // Populate individual collections
    .then(collections => {
      return Promise.all(_.map(collections, collection => {
        return Object(__WEBPACK_IMPORTED_MODULE_10__modules_export_export_single__["a" /* default */])(COLLECTION, { id: collection.id });
      }));
    })

    // map the output of exportSingle into array of collections
    .then(exportedCollections => {
      return _(exportedCollections).map(data => {
        return data && data.json;
      }).compact().value();
    })

    // Put the collections in the data-dump
    .then(collections => {
      dump.collections = collections;
    });
  };

  dumpEnvironments = function () {
    return Promise.resolve()

    // Get all the environments from db
    .then(() => {
      return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_EnvironmentController__["a" /* default */].getAll();
    })

    // filter the environments for the user (only if the exportLevel is user)
    .then(environments => {
      if (options.exportLevel !== 'user') {
        return environments;
      }

      return _.filter(environments, ['owner', userId]);
    })

    // sanitize the environments
    .then(environments => {
      return _.map(environments, env => {
        return __WEBPACK_IMPORTED_MODULE_6__modules_export_environment__["a" /* default */].sanitize(env);
      });
    })

    // Put the environments in the data-dump
    .then(environments => {
      dump.environments = environments;
    });
  };

  dumpGlobals = function () {
    return Promise.resolve()

    // Get all the globals from db
    .then(() => {
      return __WEBPACK_IMPORTED_MODULE_2__modules_controllers_GlobalsController__["a" /* default */].getAll();
    })

    // Convert globals to environments
    .then(globals => {
      return _.map(globals, globalsRecord => {
        let workspace = _.find(workspaces, ['id', globalsRecord.workspace]),
        workspaceName = _.get(workspace, 'name') || DEFAULT_WORKSPACE_NAME,
        environmentName = workspaceName + GLOBALS_NAME_SUFFIX;

        return {
          id: __WEBPACK_IMPORTED_MODULE_9__utils_util__["a" /* default */].guid(),
          name: environmentName,
          values: globalsRecord.values };

      });
    })

    // Sanitize the globals but using environmentModel
    // since the globals were converted to environments
    .then(globals => {
      return _.map(globals, globalsRecord => {
        return __WEBPACK_IMPORTED_MODULE_6__modules_export_environment__["a" /* default */].sanitize(globalsRecord);
      });
    })

    // Put the globals in the data-dump
    .then(globals => {
      dump.globals = globals;
    });
  };

  dumpHeaderPresets = function () {
    return Promise.resolve()

    // Get all the headerPresets from db
    .then(() => {
      return __WEBPACK_IMPORTED_MODULE_3__modules_controllers_HeaderPresetController__["a" /* default */].getAll();
    })

    // filter the headerPresets for the user (only if the exportLevel is user)
    .then(headerPresets => {
      if (options.exportLevel !== 'user') {
        return headerPresets;
      }

      return _.filter(headerPresets, ['owner', userId]);
    })

    // sanitize the headerPresets
    .then(headerPresets => {
      return _.map(headerPresets, headerPreset => {
        return __WEBPACK_IMPORTED_MODULE_7__modules_export_header_preset__["a" /* default */].sanitize(headerPreset);
      });
    })

    // Put the headerPresets in the data-dump
    .then(headerPresets => {
      dump.headerPresets = headerPresets;
    });
  };

  return Promise.resolve()

  // Get the user info
  .then(() => {
    return __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__["a" /* default */].get();
  })

  // Cache the userId
  .then(user => {
    userId = user.id;
  })

  // Get the workspaces
  .then(() => {
    return __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceController__["a" /* default */].getAll();
  })

  // Cache the workspaces
  .then(workspacesFromDb => {
    workspaces = workspacesFromDb;
  })

  // Wait for all the exports to finish
  .then(() => {
    return Promise.all([dumpCollections(), dumpEnvironments(), dumpGlobals(), dumpHeaderPresets()]);
  })

  // Move globals from dump.globals to dump.environments
  .then(() => {
    dump.environments = _.concat(dump.environments, dump.globals);
    dump.globals = [];
  })

  // Show a native prompt to save the file
  .then(() => {
    let serializedData = JSON.stringify(dump, null, TAB);

    return new Promise((resolve, reject) => {
      Object(__WEBPACK_IMPORTED_MODULE_8__models_services_filesystem__["b" /* saveAndOpenFile */])(EXPORTED_FILENAME, serializedData, EXPORTED_FILETYPE, (err, state) => {
        if (err) {
          console.warn('Error while saving the data-dump', err);
          reject(err);
          return;
        }

        resolve(state);
      });
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_LoadingIndicator__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActivityItem__ = __webpack_require__(3182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_date_helper__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CollectionActivity__ = __webpack_require__(2841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(16);
var _class;









let


ActivityFeed = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["a" /* observer */])(_class = class ActivityFeed extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 100);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activityFeed &&
    this.props.activityFeed &&
    nextProps.activityFeed.id &&
    nextProps.activityFeed.id !== this.props.activityFeed.id) {
      this.refs.activity_feed && (this.refs.activity_feed.scrollTop = 0);
    }
  }

  handleSignIn() {
    this.props.onSignIn && this.props.onSignIn();
  }

  handleScroll() {
    let node = this.refs.activity_feed;
    if (node.scrollHeight - (node.scrollTop + node.offsetHeight) <= 5) {
      this.props.onLoadMore && this.props.onLoadMore();
    }
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_7_classnames___default()({ 'activity-feed-container': true }, this.props.className);
  }

  render() {
    let props = this.props,
    activities = _.get(props, 'activityFeed.feeds', []),
    meta = _.get(props, 'activityFeed.meta', {}),
    isActivityFeedFetchError = _.get(props, 'activityFeed.error', false);
    if (!props.isLoggedIn) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-empty-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: 'activity-feed-empty-signin-link',
                onClick: this.handleSignIn }, 'Sign in'), ' to track changes to your collection.')));






    }

    // Don't show subscribe / Unsubscribe event in collection activity feed
    let filteredActivities = _.filter(activities, activity => {
      return !(meta.model === 'collection' && _.includes(['subscribe', 'unsubscribe'], activity.action));
    }),
    groupedActivities = _.isEmpty(filteredActivities) ? [] : __WEBPACK_IMPORTED_MODULE_3__postman_date_helper___default.a.getDateGroups(filteredActivities, 'createdAt'),
    latestActivity = _.maxBy(filteredActivities, 'id');
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },

        props.activityName &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-name-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-name-header-content' },
            props.activityName)),




        props.activityFeed.isLoading &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-loading-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_LoadingIndicator__["a" /* default */], null)),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'activity-feed',
            ref: 'activity_feed',
            onScroll: this.handleScrollDebounced },


          _.map(groupedActivities, subActivities => {
            if (_.isEmpty(subActivities)) {
              return false;
            }

            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'activity-feed-date-group-wrapper',
                  key: subActivities.name },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-date-group' }, ' ', subActivities.name, ' '),

                _.map(subActivities.items, activity => {
                  return (
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItem__["a" /* default */], {
                      activity: activity,
                      enableRestore: !!(this.props.enableRestore && latestActivity && latestActivity.id !== activity.id),
                      isRestoring: _.get(this.props, 'collectionRestoreTarget.maxId') === activity.id,
                      key: activity.id,
                      meta: meta,
                      onRestore: this.props.onRestore }));


                })));



          }),


          !props.activityFeed.isLoading && _.isEmpty(groupedActivities) && !isActivityFeedFetchError &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: props.className },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-loading-container ' }, 'No activities yet')),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__CollectionActivity__["c" /* LoadFeed */], {
            error: isActivityFeedFetchError,
            key: 'loading-more',
            loading: props.activityFeed.isLoadingMore }))));




  }}) || _class;


ActivityFeed.propTypes = {
  activityFeed: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
  activityName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  onLoadMore: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Unshare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Unsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__ = __webpack_require__(2731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__ = __webpack_require__(2765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__ = __webpack_require__(720);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



let

Create = class Create extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Created '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Update = class Update extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    trigger = activity.trigger,
    changesCount = __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__["a" /* default */].getWhiteListedActivitiesCount(activity),
    pluralizedChangeText = __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: changesCount,
      singular: 'change',
      plural: 'changes' });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head-content' },

                  changesCount > 0 &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', changesCount, ' ', pluralizedChangeText, ' to '),


                  changesCount === 0 &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', trigger === 'restore' ? 'Restored' : 'Modified', ' '),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({},
                  activity.instance, {
                    meta: meta })))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))),





          changesCount > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["b" /* Details */], activity))));



  }};let


Delete = class Delete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Deleted'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Share = class Share extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Modified access to '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt })))))));






  }};let


Unshare = class Unshare extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Modified access to '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt })))))));






  }};let


Subscribe = class Subscribe extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Subscribed to'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt })))))));






  }};let


Unsubscribe = class Unsubscribe extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Unsubscribed from'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt })))))));






  }};let


LoadFeed = class LoadFeed extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper activity-item-loadfeed' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-loadmore-container' },

          this.props.error ?
          'Something went wrong while fetching the activity feed' :
          this.props.loading ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__["a" /* default */], null) : '')));




  }};




/***/ }),

/***/ 2842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ActivityFeedDetailsMapConstant = [
{
  entity: 'name',
  label: 'Name',
  view: 'normal' },

{
  entity: 'description',
  label: 'Description',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'method',
  label: 'Method',
  view: 'normal' },

{
  entity: 'url',
  label: 'Url',
  view: 'diff',
  diffType: 'chars' },

{
  entity: 'headers',
  label: 'Headers',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'auth',
  label: 'Auth',
  view: 'diff',
  diffType: 'json' },

{
  entity: 'dataMode',
  label: 'Body',
  view: 'normal' },

{
  entity: 'rawModeData',
  label: 'Body',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'data',
  label: 'Body',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'events',
  label: 'Tests',
  view: 'diff',
  filterEntity: 'test',
  diffType: 'lines' },

{
  entity: 'events',
  label: 'Pre-request Script',
  view: 'diff',
  filterEntity: 'prerequest',
  diffType: 'lines' },

{
  entity: 'variables',
  label: 'Variables',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'order',
  label: 'Order',
  view: 'normal' }];



/* harmony default export */ __webpack_exports__["a"] = (ActivityFeedDetailsMapConstant);

/***/ }),

/***/ 2843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_diff__ = __webpack_require__(3184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_diff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DiffLine__ = __webpack_require__(3195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DiffTextView__ = __webpack_require__(3197);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};






let


Diff = class Diff extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { showOverlay: false };
  }

  componentDidMount() {
    if (!this.props.ignoreOverlay && this.refs.diff_wrapper) {
      this.computeAndSetOverLay();
    }
  }

  componentWillReceiveProps() {
    if (!this.props.ignoreOverlay && this.refs.diff_wrapper) {
      this.computeAndSetOverLay();
    }
  }

  handleOnExpandableView(from, to, type, modalHeader) {
    if (this.state.showOverlay) {
      pm.mediator.trigger('showDiffModal', from, to, type, modalHeader);
    }
  }

  computeAndSetOverLay() {
    let container = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.refs.diff_wrapper),
    childNodesArray = container.childNodes,
    totalChildHeight = 0,
    totalChildWidth = 0,
    isCharType = this.props.type === 'chars',
    isSingleDiffSizeExceeded = false,
    isTotalDiffSizeExceeded = false,
    containerWidth = container.offsetWidth,
    containerHeight = container.offsetHeight;

    _.forEach(childNodesArray, child => {
      let innerChild = child.childNodes[0];
      if (containerWidth < innerChild.offsetWidth ||
      containerHeight < innerChild.offsetHeight) {
        isSingleDiffSizeExceeded = true;
        return false;
      }
      if (isCharType) {
        totalChildWidth += innerChild.offsetWidth;
      } else
      {
        totalChildHeight += innerChild.offsetHeight;
      }
      return true;
    });
    isTotalDiffSizeExceeded = isCharType ? totalChildWidth > containerWidth : totalChildHeight > containerHeight;
    this.setState({ showOverlay: isSingleDiffSizeExceeded || isTotalDiffSizeExceeded });
  }


  getDiff(previous, current, type) {
    let typeVsFunction = {
      chars: __WEBPACK_IMPORTED_MODULE_1_diff__["diffChars"],
      words: __WEBPACK_IMPORTED_MODULE_1_diff__["diffWords"],
      lines: __WEBPACK_IMPORTED_MODULE_1_diff__["diffLines"],
      json: __WEBPACK_IMPORTED_MODULE_1_diff__["diffJson"] };

    return typeVsFunction[type](previous, current);
  }

  getOverlayClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'diff-overlay-wrapper': !this.state.showOverlay,
      'is-expandable': this.state.showOverlay });

  }


  render() {
    let {
      previous,
      current,
      type,
      modalHeader } =
    this.props,
    diff = this.getDiff(previous, current, type);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getOverlayClasses(),
          onClick: this.handleOnExpandableView.bind(this, previous, current, type, modalHeader) },


        this.props.ignoreOverlay && type !== 'chars' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__DiffLine__["a" /* default */], {
          diff: diff,
          type: type }),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__DiffTextView__["a" /* default */], _extends({
          diff: diff,
          ref: 'diff_wrapper' },
        this.props))));



  }};


Diff.propTypes = {
  current: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object]),
  previous: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object]),
  type: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['chars', 'words', 'lines', 'json']) };


Diff.defaultProps = {
  previous: '',
  current: '',
  type: 'chars' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/generateOptions = generateOptions;
function generateOptions(options, defaults) {
  if (typeof options === 'function') {
    defaults.callback = options;
  } else if (options) {
    for (var name in options) {
      /* istanbul ignore else */
      if (options.hasOwnProperty(name)) {
        defaults[name] = options[name];
      }
    }
  }
  return defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCO0FBQVQsU0FBUyxlQUFULENBQXlCLE9BQXpCLEVBQWtDLFFBQWxDLEVBQTRDO0FBQ2pELE1BQUksT0FBTyxPQUFQLEtBQW1CLFVBQW5CLEVBQStCO0FBQ2pDLGFBQVMsUUFBVCxHQUFvQixPQUFwQixDQURpQztHQUFuQyxNQUVPLElBQUksT0FBSixFQUFhO0FBQ2xCLFNBQUssSUFBSSxJQUFKLElBQVksT0FBakIsRUFBMEI7O0FBRXhCLFVBQUksUUFBUSxjQUFSLENBQXVCLElBQXZCLENBQUosRUFBa0M7QUFDaEMsaUJBQVMsSUFBVCxJQUFpQixRQUFRLElBQVIsQ0FBakIsQ0FEZ0M7T0FBbEM7S0FGRjtHQURLO0FBUVAsU0FBTyxRQUFQLENBWGlEO0NBQTVDIiwiZmlsZSI6InBhcmFtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGVmYXVsdHMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcbiAgICBmb3IgKGxldCBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBkZWZhdWx0c1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWZhdWx0cztcbn1cbiJdfQ==


/***/ }),

/***/ 2845:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/parsePatch = parsePatch;
function parsePatch(uniDiff) {
  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var diffstr = uniDiff.split('\n'),
      list = [],
      i = 0;

  function parseIndex() {
    var index = {};
    list.push(index);

    // Parse diff metadata
    while (i < diffstr.length) {
      var line = diffstr[i];

      // File header found, end parsing diff metadata
      if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
        break;
      }

      // Diff index
      var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
      if (header) {
        index.index = header[1];
      }

      i++;
    }

    // Parse file headers if they are defined. Unified diff requires them, but
    // there's no technical issues to have an isolated hunk without file header
    parseFileHeader(index);
    parseFileHeader(index);

    // Parse hunks
    index.hunks = [];

    while (i < diffstr.length) {
      var _line = diffstr[i];

      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
        break;
      } else if (/^@@/.test(_line)) {
        index.hunks.push(parseHunk());
      } else if (_line && options.strict) {
        // Ignore unexpected content unless in strict mode
        throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
      } else {
        i++;
      }
    }
  }

  // Parses the --- and +++ headers, if none are found, no lines
  // are consumed.
  function parseFileHeader(index) {
    var fileHeader = /^(\-\-\-|\+\+\+)\s+(\S*)\s?(.*?)\s*$/.exec(diffstr[i]);
    if (fileHeader) {
      var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
      index[keyPrefix + 'FileName'] = fileHeader[2];
      index[keyPrefix + 'Header'] = fileHeader[3];

      i++;
    }
  }

  // Parses a hunk
  // This assumes that we are at the start of a hunk.
  function parseHunk() {
    var chunkHeaderIndex = i,
        chunkHeaderLine = diffstr[i++],
        chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);

    var hunk = {
      oldStart: +chunkHeader[1],
      oldLines: +chunkHeader[2] || 1,
      newStart: +chunkHeader[3],
      newLines: +chunkHeader[4] || 1,
      lines: []
    };

    var addCount = 0,
        removeCount = 0;
    for (; i < diffstr.length; i++) {
      var operation = diffstr[i][0];

      if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
        hunk.lines.push(diffstr[i]);

        if (operation === '+') {
          addCount++;
        } else if (operation === '-') {
          removeCount++;
        } else if (operation === ' ') {
          addCount++;
          removeCount++;
        }
      } else {
        break;
      }
    }

    // Handle the empty block count case
    if (!addCount && hunk.newLines === 1) {
      hunk.newLines = 0;
    }
    if (!removeCount && hunk.oldLines === 1) {
      hunk.oldLines = 0;
    }

    // Perform optional sanity checking
    if (options.strict) {
      if (addCount !== hunk.newLines) {
        throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
      }
      if (removeCount !== hunk.oldLines) {
        throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
      }
    }

    return hunk;
  }

  while (i < diffstr.length) {
    parseIndex();
  }

  return list;
}
//# sourceMappingURL=data:application/json;base64,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cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGF0Y2godW5pRGlmZiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgnXFxuJyksXG4gICAgICBsaXN0ID0gW10sXG4gICAgICBpID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUluZGV4KCkge1xuICAgIGxldCBpbmRleCA9IHt9O1xuICAgIGxpc3QucHVzaChpbmRleCk7XG5cbiAgICAvLyBQYXJzZSBkaWZmIG1ldGFkYXRhXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgbGV0IGxpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICAvLyBGaWxlIGhlYWRlciBmb3VuZCwgZW5kIHBhcnNpbmcgZGlmZiBtZXRhZGF0YVxuICAgICAgaWYgKC9eKFxcLVxcLVxcLXxcXCtcXCtcXCt8QEApXFxzLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBEaWZmIGluZGV4XG4gICAgICBsZXQgaGVhZGVyID0gKC9eKD86SW5kZXg6fGRpZmYoPzogLXIgXFx3KykrKVxccysoLis/KVxccyokLykuZXhlYyhsaW5lKTtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaW5kZXguaW5kZXggPSBoZWFkZXJbMV07XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBQYXJzZSBmaWxlIGhlYWRlcnMgaWYgdGhleSBhcmUgZGVmaW5lZC4gVW5pZmllZCBkaWZmIHJlcXVpcmVzIHRoZW0sIGJ1dFxuICAgIC8vIHRoZXJlJ3Mgbm8gdGVjaG5pY2FsIGlzc3VlcyB0byBoYXZlIGFuIGlzb2xhdGVkIGh1bmsgd2l0aG91dCBmaWxlIGhlYWRlclxuICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XG4gICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcblxuICAgIC8vIFBhcnNlIGh1bmtzXG4gICAgaW5kZXguaHVua3MgPSBbXTtcblxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIGxldCBsaW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgaWYgKC9eKEluZGV4OnxkaWZmfFxcLVxcLVxcLXxcXCtcXCtcXCspXFxzLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICgvXkBALy50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGluZGV4Lmh1bmtzLnB1c2gocGFyc2VIdW5rKCkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lICYmIG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgIC8vIElnbm9yZSB1bmV4cGVjdGVkIGNvbnRlbnQgdW5sZXNzIGluIHN0cmljdCBtb2RlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaW5lICcgKyAoaSArIDEpICsgJyAnICsgSlNPTi5zdHJpbmdpZnkobGluZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlcyB0aGUgLS0tIGFuZCArKysgaGVhZGVycywgaWYgbm9uZSBhcmUgZm91bmQsIG5vIGxpbmVzXG4gIC8vIGFyZSBjb25zdW1lZC5cbiAgZnVuY3Rpb24gcGFyc2VGaWxlSGVhZGVyKGluZGV4KSB7XG4gICAgbGV0IGZpbGVIZWFkZXIgPSAoL14oXFwtXFwtXFwtfFxcK1xcK1xcKylcXHMrKFxcUyopXFxzPyguKj8pXFxzKiQvKS5leGVjKGRpZmZzdHJbaV0pO1xuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICBsZXQga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0ZpbGVOYW1lJ10gPSBmaWxlSGVhZGVyWzJdO1xuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0hlYWRlciddID0gZmlsZUhlYWRlclszXTtcblxuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlcyBhIGh1bmtcbiAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG4gIGZ1bmN0aW9uIHBhcnNlSHVuaygpIHtcbiAgICBsZXQgY2h1bmtIZWFkZXJJbmRleCA9IGksXG4gICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgY2h1bmtIZWFkZXIgPSBjaHVua0hlYWRlckxpbmUuc3BsaXQoL0BAIC0oXFxkKykoPzosKFxcZCspKT8gXFwrKFxcZCspKD86LChcXGQrKSk/IEBALyk7XG5cbiAgICBsZXQgaHVuayA9IHtcbiAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICBvbGRMaW5lczogK2NodW5rSGVhZGVyWzJdIHx8IDEsXG4gICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgbmV3TGluZXM6ICtjaHVua0hlYWRlcls0XSB8fCAxLFxuICAgICAgbGluZXM6IFtdXG4gICAgfTtcblxuICAgIGxldCBhZGRDb3VudCA9IDAsXG4gICAgICAgIHJlbW92ZUNvdW50ID0gMDtcbiAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvcGVyYXRpb24gPSBkaWZmc3RyW2ldWzBdO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnKycgfHwgb3BlcmF0aW9uID09PSAnLScgfHwgb3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgaHVuay5saW5lcy5wdXNoKGRpZmZzdHJbaV0pO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGhlIGVtcHR5IGJsb2NrIGNvdW50IGNhc2VcbiAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgIH1cbiAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHVuaztcbiAgfVxuXG4gIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICBwYXJzZUluZGV4KCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbiJdfQ==


/***/ }),

/***/ 2846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__ = __webpack_require__(30);





/* harmony default export */ __webpack_exports__["a"] = ((id, action, modifiers, options = {}, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  let environment = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('EnvironmentStore').find(id);
  if (action === 'duplicate') {
    let duplicateEnvironmentEvent = {
      name: 'duplicate',
      namespace: 'environment',
      data: {
        model: 'environment',
        environment: { id } } };



    Object(__WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__["a" /* default */])(duplicateEnvironmentEvent);
    options.origin === 'browse' && __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__["a" /* default */].addEvent('environment', 'duplicate', 'browse_view');
  } else
  if (action === 'download') {
    Object(__WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__["a" /* default */])().then(converter => {
      converter.saveEntity({ id }, { type: 'environment' });
      options.origin === 'browse' && __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__["a" /* default */].addEvent('environment', 'download', 'browse_view');
    });
  } else
  if (action === 'delete') {
    pm.mediator.trigger('showEnvironmentDeleteModal', id, { origin: options.origin }, callback);
  } else
  if (action === 'add-to-workspace') {
    pm.mediator.trigger('openAddToWorkspaceModal', environment.uid, 'environment', { origin: options.origin });
  } else
  if (action === 'remove-from-workspace') {
    pm.mediator.trigger('showRemoveEnvironmentWorkspaceModal', id, { origin: options.origin }, callback);
  }
});

/***/ }),

/***/ 2904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceTypeSwitcherIntro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Tooltips__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(18);


let

WorkspaceTypeSwitcherIntro = class WorkspaceTypeSwitcherIntro extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Tooltips__["a" /* Tooltip */], {
          show: this.props.show,
          target: this.props.refElement,
          placement: 'top-right',
          className: 'workspace-type-switcher__intro__wrap' },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Tooltips__["b" /* TooltipBody */], null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-type-switcher__intro' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-type-switcher__intro__title' }, 'You\'re now browsing this workspace'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-type-switcher__intro__description' }, 'The Browse view allows you to navigate all elements inside a workspace without joining it. Join a workspace to work on everything inside it.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-type-switcher__intro__learn-more' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                  type: 'text',
                  onClick: this.props.onLearnMore }, 'Learn more about browsing a workspace')),




            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-type-switcher__intro__primary-btn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                  type: 'primary',
                  size: 'large',
                  onClick: this.props.onHide }, 'Okay, got it!'))))));








  }};

/***/ }),

/***/ 3085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_CollectionController__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_RequestConstants__ = __webpack_require__(1131);





const DEPRECATED_PROPS = [
'currentHelper',
'helperAttributes',
'tests',
'preRequestScript'],

TAB = '\t',
COLLECTION = 'collection',
FILE_NAME_EXT = '.postman_collection.json',
ARRAY_BODY_TYPES = ['params', 'urlencoded'],
ALLOWED_VARIABLE_FIELDS = ['id', 'key', 'value', 'type', 'disabled', 'description'],
ALLOWED_DATA_FIELDS = ['key', 'value', 'description', 'type', 'enabled'],
ALLOWED_QUERY_PARAMS_FIELDS = ['key', 'value', 'equals', 'description', 'enabled'],
ALLOWED_RESPONSE_HEADER_FIELDS = ['key', 'value', 'name', 'description', 'type'],
COLLECTION_META_PROPS = ['owner', 'permissions', 'shared', 'favorite'],

METHOD_GET = 'GET',
DBP_FLAG = 'protocolProfileBehavior.disableBodyPruning',
NO_BODY_METHODS_SET = new Set(__WEBPACK_IMPORTED_MODULE_3__constants_RequestConstants__["a" /* NO_BODY_METHODS */]);

/**
                                                 * Gets the populated collection from the db
                                                 * @param {Object} criteria
                                                 * @returns {Promise} Which resolves in the populated collection
                                                 */
function getFromDb(criteria) {
  return __WEBPACK_IMPORTED_MODULE_1__controllers_CollectionController__["a" /* default */].getCollection(criteria, { populate: true });
}

/**
   * Sanitizes the collection-request and example-request fields
   * 1. Remove the timestamps
   * 2. Sanitize the body (convert the types)
   * 3. Sanitize the query params
   * 4. Remove unnecessary (but valid) fields
   * @param {Object} request
   */
function _sanitizeRequestFields(request) {
  // Bail out when request is falsy or is string (possible for example requests)
  if (!request || typeof request === 'string') {
    return;
  }

  let sanitizedRequest = _.clone(request);

  // remove the timestamps
  delete sanitizedRequest.createdAt;
  delete sanitizedRequest.updatedAt;

  // Body of type form and urlencoded are only stored as array.
  // Do not sanitize body of type raw and binary
  let shouldSanitizeBody = _.includes(ARRAY_BODY_TYPES, sanitizedRequest.dataMode) && !_.isEmpty(sanitizedRequest.data),
  shouldSanitizeParams = _.isArray(sanitizedRequest.queryParams) && !_.isEmpty(sanitizedRequest.queryParams);

  if (shouldSanitizeBody) {
    if (_.isArray(sanitizedRequest.data)) {
      sanitizedRequest.data = _.map(sanitizedRequest.data, value => {
        return _.pick(value, ALLOWED_DATA_FIELDS);
      });
    } else {
      // It's possible that a request was saved with body type form/url-encoded and then later the type was changed to raw/binary.
      // In that case if the actual data wasn't reset we do it now to avoid exporting incorrect data
      sanitizedRequest.data = [];
    }
  }

  if (shouldSanitizeParams) {
    sanitizedRequest.queryParams = _.map(sanitizedRequest.queryParams, value => {
      return _.pick(value, ALLOWED_QUERY_PARAMS_FIELDS);
    });
  }

  let methodAllowsAllowBody = !NO_BODY_METHODS_SET.has(sanitizedRequest.method || METHOD_GET),
  noBodyPresent = !sanitizedRequest.dataMode,
  isDbpFalsy = !_.get(sanitizedRequest, DBP_FLAG);

  // remove DBP flag if it's unnecessary
  if (methodAllowsAllowBody || noBodyPresent || isDbpFalsy) {
    _.unset(sanitizedRequest, 'protocolProfileBehavior.disableBodyPruning');
  }

  // remove protocolProfileBehavior if it's unnecessary (even if DBP is removed, there can be other flags here in future)
  _.isEmpty(sanitizedRequest.protocolProfileBehavior) && _.unset(sanitizedRequest, 'protocolProfileBehavior');

  return sanitizedRequest;
}

/**
   * Sanitizes the response fields
   * @param {Object} request
   */
function _sanitizeResponseFields(response) {
  if (!response) {
    return;
  }

  let sanitizedResponse = _.clone(response),
  shouldSanitizeHeaders = _.isArray(response.headers) && !_.isEmpty(response.headers);

  sanitizedResponse.requestObject && (sanitizedResponse.requestObject = _sanitizeRequestFields(sanitizedResponse.requestObject));

  delete sanitizedResponse.createdAt;
  delete sanitizedResponse.updatedAt;

  if (!shouldSanitizeHeaders) {
    return sanitizedResponse;
  }

  sanitizedResponse.headers = _.map(sanitizedResponse.headers, value => {
    return _.pick(value, ALLOWED_RESPONSE_HEADER_FIELDS);
  });


  return sanitizedResponse;
}

/**
   * Sanitizes the collection variables.
   * @param {Array<Object>} variables
   * @returns {Array<Object>} Sanitized collection variables
   */
function _sanitizeVariables(variables) {
  if (_.isEmpty(variables)) {
    return [];
  }

  return _.map(variables, variable => {
    let disabled = false;

    // While exporting, we give more preference to enabled field (unlike while importing)
    // since we are exporting from app format in which enabled is the valid field
    if (typeof variable.enabled !== 'undefined') {
      disabled = !variable.enabled;
    } else
    if (typeof variable.disabled !== 'undefined') {
      disabled = Boolean(variable.disabled);
    }

    return _.pick(_.merge({}, variable, { disabled }), ALLOWED_VARIABLE_FIELDS);
  });
}

/**
   * Sanitizes the collection object recursively for exporting
   * @param {Object} collection
   * @returns {Object} The sanitized collection
   */
function sanitize(collection) {
  let sanitizedCollection = _.cloneDeep(collection);

  sanitizedCollection.requests = _.map(sanitizedCollection.requests, request => {
    // sanitize the request
    let sanitizedRequest = _sanitizeRequestFields(request);

    // sanitize its responses
    if (_.isArray(sanitizedRequest.responses) && !_.isEmpty(sanitizedRequest.responses)) {
      sanitizedRequest.responses = _.map(sanitizedRequest.responses, _sanitizeResponseFields);
    }

    return sanitizedRequest;
  });

  return sanitizedCollection;
}

/**
   * This converts the collection from app-format to v1 format
   * @param {Object} collection
   * @param {Object} options - Additional options for the export
   * @returns {Object} The collection in v1 format
   */
function _transformToV1(collection, options) {
  let requests = collection.requests,
  requestIdsAdded = [];

  // sanitize the variables
  collection.variables = _sanitizeVariables(collection.variables);

  // sort data.folders
  collection.folders = _.sortBy(collection.folders, 'name');

  for (let i = 0, count = requests.length; i < count; i++) {
    if (requestIdsAdded.indexOf(requests[i].id) !== -1) {
      // this request is already there
      continue;
    }

    requests[i] = _.omit(requests[i], DEPRECATED_PROPS);

    // At present this code is not needed as anyway db will have both old and new props,
    // But when we remove the old props support, still we need to support them in v1 export
    // thus the reason for using denormalize is
    // When we remove the properties from DB itself means, still this code needs to work.
    // This means it is v1 format
    if (!options) {
      __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* default */].denormalizeRequest(requests[i]);
      requests[i].collectionId = collection.id;
    }

    requestIdsAdded.push(requests[i].id);
    requests[i].synced = false;

    if (requests[i].dataMode === 'raw') {
      requests[i].rawModeData = requests[i].data;
      requests[i].data = [];
    } else
    if (requests[i].dataMode === 'params') {
      // file formData rows should be exported with value=filename of the first file
      _.each(requests[i].data, function (dataRow) {
        if (dataRow.type === 'file') {
          try {
            dataRow.value = dataRow.value[0].name;
          }
          catch (e) {
            console.log('Could not read FileList correctly');
            dataRow.value = '';
          }
        }
      });
    }

    if (requests[i].rawModeData) {
      // to prevent rawModeData being sent as ["text"] instead of "text"
      if (requests[i].rawModeData instanceof Array &&
      requests[i].rawModeData.length == 1) {
        requests[i].rawModeData = requests[i].rawModeData[0];
      }
      if (typeof requests[i].rawModeData !== 'string') {
        requests[i].rawModeData = '';
      }
    }

    // delete duplicate responses while exporting
    if (requests[i].responses instanceof Array) {
      requests[i].responses = _.uniqBy(requests[i].responses, 'id');
    }

    if (_.isArray(requests[i].headerData)) {
      requests[i].headers = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* default */].packHeaders(requests[i].headerData);
    }

    if (_.isArray(requests[i].pathVariableData)) {
      let pathVariables = {};
      _.forEach(requests[i].pathVariableData, datum => {
        pathVariables[datum.key] = datum.value;
      });
      requests[i].pathVariables = pathVariables;
    }

    var propsToRemove = ['write', 'synced', 'collectionOwner', 'createdAt', 'updatedAt', 'owner', 'lastUpdatedBy', 'lastRevision', 'history', 'collection'];
    _.each(propsToRemove, function (prop) {
      delete requests[i][prop];
    });
  }

  if (!options) {
    let numFolders = collection.folders && collection.folders instanceof Array ? collection.folders.length : 0;

    for (let i = 0; i < numFolders; i++) {
      // V1 format support
      collection.folders[i].collectionId = collection.folders[i].collection;
      collection.folders[i].folderId = collection.folders[i].id;
    }
  }

  // remove all meta properties from collection
  // instead of deleting all the meta properties, we should whitelist collection V1 schema properties
  _.forEach(COLLECTION_META_PROPS, function (metaProp) {
    delete collection[metaProp];
  });

  collection.requests = requests;
  return collection;
}

/**
   * This transforms the collection into the exportable format
   * First it converts the collection to v1 format, then optionally to v2/v2.1 format
   * @param {Object} collection
   * @param {Object} context
   * @returns {Promise} Which resolves in the transformed collection
   */
function transform(collection, context) {
  let options = context.exportOptions,
  collectionV1 = _transformToV1(collection, options);

  if (!(options && options.outputVersion && options.inputVersion && options.outputVersion !== '1.0.0')) {
    return Promise.resolve(collectionV1);
  }

  return new Promise((resolve, reject) => {
    __WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer___default.a.convert(collectionV1, options, (err, response) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(response);
    });
  });
}

/**
   * Returns the entity name
   * @param {Object} collection
   */
function getEntityName(collection) {
  return collection.name || COLLECTION;
}

/**
   * Returns the fileName that can be used if exporting to a file
   * @param {Object} collection
   */
function getFileName(collection) {
  return this.getEntityName(collection) + FILE_NAME_EXT;
}

/**
   * Serializes the collection
   * @param {Object} collection
   * @returns {String} Stringified collection
   */
function serialize(collection) {
  return JSON.stringify(collection, null, TAB);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getFromDb,
  sanitize,
  transform,
  getEntityName,
  getFileName,
  serialize });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_controllers_GlobalsController__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceController__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2755);




const GLOBALS = 'globals',
GLOBALS_NAME_SUFFIX = 'Globals',
EXPORTED_USING_PREFIX = 'Postman/',
FILE_NAME_EXT = '.postman_globals.json',
TAB = '\t',
allowedGlobalsFields = ['id', 'values'];

/**
                                          * Gets the context which will be used by other steps in exporting the globals
                                          * @param {Object} criteria
                                          * @returns {Promise} which resolves into the context
                                          */
function getContext(criteria) {
  let workspaceId = criteria.workspace;

  return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceController__["a" /* default */].get({ id: workspaceId }).
  then(workspace => {
    return workspace;
  })

  // Do not crash the export even if we couldn't get the workspace
  .catch(err => {
    console.error('Could not get workspace while exporting globals', err);
    return {}; // if workspace was not found we store empty object
  }).

  then(workspace => {
    return {
      modelId: workspaceId,
      workspace: workspace || {} };

  });
}

/**
   * Gets the globals from the db
   * @param {Object} criteria
   */
function getFromDb(criteria) {
  return __WEBPACK_IMPORTED_MODULE_0__modules_controllers_GlobalsController__["a" /* default */].get(criteria);
}

/**
   * Sanitizes the globals before exporting
   * @param {Object} globals
   */
function sanitize(globals) {
  let sanitizedGlobals = _.pick(globals, allowedGlobalsFields);
  sanitizedGlobals.values = _.map(sanitizedGlobals.values, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* sanitizeVariableValue */]);

  return sanitizedGlobals;
}


/**
   * This transforms the globals into the exportable format
   * It adds few meta properties
   * @param {Object} globals
   * @param {Object} context
   * @returns {Object} Transformed globals
   */
function transform(globals, context = {}) {
  let workspaceName = _.get(context, 'workspace.name', ''),
  globalsName = _.trim(`${workspaceName} ${GLOBALS_NAME_SUFFIX}`);

  return _.merge({}, globals, {
    name: globalsName,
    _postman_variable_scope: GLOBALS,
    _postman_exported_at: new Date().toISOString(),
    _postman_exported_using: EXPORTED_USING_PREFIX + context.appVersion });

}

/**
   * Returns the entity name
   * @param {Object} globals
   * @param {Object} context
   */
function getEntityName(globals, context) {
  return _.get(context, 'workspace.name', 'workspace');
}

/**
   * Returns the fileName that can be used if exporting to a file
   * @param {Object} globals
   * @param {Object} context
   */
function getFileName(globals, context) {
  return this.getEntityName(globals, context) + FILE_NAME_EXT;
}

/**
   * Serializes the globals
   * @param {Object} globals
   * @returns {String} Stringified globals
   */
function serialize(globals) {
  return JSON.stringify(globals, null, TAB);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getContext,
  getFromDb,
  sanitize,
  transform,
  getEntityName,
  getFileName,
  serialize });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_HeaderPresetController__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2755);



const TAB = '\t',
FILE_NAME_EXT = '.postman_headerpreset.json',
allowedHeaderPresetFields = ['id', 'name', 'headers'];

/**
                                                        * Gets the headerPreset from the db
                                                        * @param {Object} criteria
                                                        */
function getFromDb(criteria) {
  return __WEBPACK_IMPORTED_MODULE_0__controllers_HeaderPresetController__["a" /* default */].get(criteria);
}

/**
   * Sanitizes the headerPreset before exporting
   * @param {Object} headerPreset
   */
function sanitize(headerPreset) {
  let sanitizedHeaderPreset = _.pick(headerPreset, allowedHeaderPresetFields);
  sanitizedHeaderPreset.headers = _.map(sanitizedHeaderPreset.headers, __WEBPACK_IMPORTED_MODULE_1__util__["a" /* sanitizeVariableValue */]);

  return sanitizedHeaderPreset;
}

/**
   * Returns the entity name
   * @param {Object} headerPreset
   */
function getEntityName(headerPreset) {
  return headerPreset.name;
}

/**
   * Returns the fileName that can be used if exporting to a file
   * @param {Object} globals
   */
function getFileName(globals) {
  return this.getEntityName(globals) + FILE_NAME_EXT;
}

/**
   * Serializes the headerPreset
   * @param {Object} headerPreset
   * @returns {String} Stringified headerPreset
   */
function serialize(headerPreset) {
  return JSON.stringify(headerPreset, null, TAB);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getFromDb,
  sanitize,
  getEntityName,
  getFileName,
  serialize });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionActivity__ = __webpack_require__(2841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RequestActivity__ = __webpack_require__(3198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FolderActivity__ = __webpack_require__(3199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResponseActivity__ = __webpack_require__(3200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__(16);
var _class;






let


ActivityItem = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["a" /* observer */])(_class = class ActivityItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let defaultActivityProps = _.pick(this.props, [
    'activity',
    'meta']),

    restorableActivityProps = _.assign({}, defaultActivityProps, _.pick(this.props, [
    'enableRestore',
    'isRestoring',
    'onRestore']));


    switch (`${defaultActivityProps.activity.model}:${defaultActivityProps.activity.action}`) {
      case 'collection:create':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["a" /* Create */], restorableActivityProps);
      case 'collection:update':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["h" /* Update */], restorableActivityProps);
      case 'collection:destroy':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["b" /* Delete */], restorableActivityProps);
      case 'collection:share':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["d" /* Share */], defaultActivityProps);
      case 'collection:unshare':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["f" /* Unshare */], defaultActivityProps);
      case 'collection:subscribe':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["e" /* Subscribe */], defaultActivityProps);
      case 'collection:unsubscribe':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["g" /* Unsubscribe */], defaultActivityProps);
      case 'request:create':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestActivity__["a" /* Create */], restorableActivityProps);
      case 'request:update':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestActivity__["d" /* Update */], restorableActivityProps);
      case 'request:destroy':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestActivity__["b" /* Delete */], restorableActivityProps);
      case 'request:transfer':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestActivity__["c" /* Transfer */], restorableActivityProps);
      case 'folder:create':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FolderActivity__["a" /* Create */], restorableActivityProps);
      case 'folder:update':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FolderActivity__["c" /* Update */], restorableActivityProps);
      case 'folder:destroy':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FolderActivity__["b" /* Delete */], restorableActivityProps);
      case 'response:create':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResponseActivity__["a" /* Create */], restorableActivityProps);
      case 'response:update':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResponseActivity__["c" /* Update */], restorableActivityProps);
      case 'response:destroy':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResponseActivity__["b" /* Delete */], restorableActivityProps);
      default:
        return false;}

  }}) || _class;


ActivityItem.propTypes = {
  activity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  enableRestore: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  meta: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_diff_Diff__ = __webpack_require__(2843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(17);



let

NormalView = class NormalView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      previous,
      current } =
    this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-details-content-right' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-details-content-data' }, previous),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, previous ? ' to ' : ' '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-details-content-data' }, current)));


  }};let


DiffView = class DiffView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      type = 'chars',
      previous,
      current,
      modalHeader } =
    this.props;
    previous = type === 'lines' ? __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].beautifyJs(previous) : previous;
    current = type === 'lines' ? __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].beautifyJs(current) : current;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-details-content-right activity-item-details-diff-view' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_diff_Diff__["a" /* default */], {
          modalHeader: modalHeader,
          previous: previous,
          current: current,
          type: type })));



  }};let


DetailsItem = class DetailsItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'activity-item-details-content': true,
      'normal-view': this.props.view === 'normal' });

  }

  render() {
    let {
      previous,
      current,
      label,
      model,
      name,
      diffType } =
    this.props,
    modalHeader = 'Change to ' + label + ' for ' + model + ' ' + name;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-details-content-left' },
          label),


        this.props.view === 'normal' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NormalView, {
          previous: previous,
          current: current }),



        this.props.view === 'diff' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DiffView, {
          modalHeader: modalHeader,
          previous: previous,
          current: current,
          type: diffType })));




  }};




/***/ }),

/***/ 3184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;
/*istanbul ignore end*/
var /*istanbul ignore start*/_base = __webpack_require__(2672) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

/*istanbul ignore end*/
var /*istanbul ignore start*/_character = __webpack_require__(3185) /*istanbul ignore end*/;

var /*istanbul ignore start*/_word = __webpack_require__(3186) /*istanbul ignore end*/;

var /*istanbul ignore start*/_line = __webpack_require__(2764) /*istanbul ignore end*/;

var /*istanbul ignore start*/_sentence = __webpack_require__(3187) /*istanbul ignore end*/;

var /*istanbul ignore start*/_css = __webpack_require__(3188) /*istanbul ignore end*/;

var /*istanbul ignore start*/_json = __webpack_require__(3189) /*istanbul ignore end*/;

var /*istanbul ignore start*/_apply = __webpack_require__(3190) /*istanbul ignore end*/;

var /*istanbul ignore start*/_parse = __webpack_require__(2845) /*istanbul ignore end*/;

var /*istanbul ignore start*/_create = __webpack_require__(3192) /*istanbul ignore end*/;

var /*istanbul ignore start*/_dmp = __webpack_require__(3193) /*istanbul ignore end*/;

var /*istanbul ignore start*/_xml = __webpack_require__(3194) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* See LICENSE file for terms of use */

/*
 * Text diff implementation.
 *
 * This library supports the following APIS:
 * JsDiff.diffChars: Character by character diff
 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
 * JsDiff.diffLines: Line based diff
 *
 * JsDiff.diffCss: Diff targeted at CSS content
 *
 * These methods are based on the implementation proposed in
 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
 */
exports. /*istanbul ignore end*/Diff = _base2.default;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffChars = _character.diffChars;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWords = _word.diffWords;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = _word.diffWordsWithSpace;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffLines = _line.diffLines;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = _line.diffTrimmedLines;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffSentences = _sentence.diffSentences;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffCss = _css.diffCss;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffJson = _json.diffJson;
/*istanbul ignore start*/exports. /*istanbul ignore end*/structuredPatch = _create.structuredPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = _create.createTwoFilesPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = _create.createPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatch = _apply.applyPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = _apply.applyPatches;
/*istanbul ignore start*/exports. /*istanbul ignore end*/parsePatch = _parse.parsePatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToDMP = _dmp.convertChangesToDMP;
/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToXML = _xml.convertChangesToXML;
/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = _json.canonicalize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWdCQTs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHRTt5REFFQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFFQTt5REFDQTt5REFFQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNlZSBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zIG9mIHVzZSAqL1xuXG4vKlxuICogVGV4dCBkaWZmIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIFRoaXMgbGlicmFyeSBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIEFQSVM6XG4gKiBKc0RpZmYuZGlmZkNoYXJzOiBDaGFyYWN0ZXIgYnkgY2hhcmFjdGVyIGRpZmZcbiAqIEpzRGlmZi5kaWZmV29yZHM6IFdvcmQgKGFzIGRlZmluZWQgYnkgXFxiIHJlZ2V4KSBkaWZmIHdoaWNoIGlnbm9yZXMgd2hpdGVzcGFjZVxuICogSnNEaWZmLmRpZmZMaW5lczogTGluZSBiYXNlZCBkaWZmXG4gKlxuICogSnNEaWZmLmRpZmZDc3M6IERpZmYgdGFyZ2V0ZWQgYXQgQ1NTIGNvbnRlbnRcbiAqXG4gKiBUaGVzZSBtZXRob2RzIGFyZSBiYXNlZCBvbiB0aGUgaW1wbGVtZW50YXRpb24gcHJvcG9zZWQgaW5cbiAqIFwiQW4gTyhORCkgRGlmZmVyZW5jZSBBbGdvcml0aG0gYW5kIGl0cyBWYXJpYXRpb25zXCIgKE15ZXJzLCAxOTg2KS5cbiAqIGh0dHA6Ly9jaXRlc2VlcnguaXN0LnBzdS5lZHUvdmlld2RvYy9zdW1tYXJ5P2RvaT0xMC4xLjEuNC42OTI3XG4gKi9cbmltcG9ydCBEaWZmIGZyb20gJy4vZGlmZi9iYXNlJztcbmltcG9ydCB7ZGlmZkNoYXJzfSBmcm9tICcuL2RpZmYvY2hhcmFjdGVyJztcbmltcG9ydCB7ZGlmZldvcmRzLCBkaWZmV29yZHNXaXRoU3BhY2V9IGZyb20gJy4vZGlmZi93b3JkJztcbmltcG9ydCB7ZGlmZkxpbmVzLCBkaWZmVHJpbW1lZExpbmVzfSBmcm9tICcuL2RpZmYvbGluZSc7XG5pbXBvcnQge2RpZmZTZW50ZW5jZXN9IGZyb20gJy4vZGlmZi9zZW50ZW5jZSc7XG5cbmltcG9ydCB7ZGlmZkNzc30gZnJvbSAnLi9kaWZmL2Nzcyc7XG5pbXBvcnQge2RpZmZKc29uLCBjYW5vbmljYWxpemV9IGZyb20gJy4vZGlmZi9qc29uJztcblxuaW1wb3J0IHthcHBseVBhdGNoLCBhcHBseVBhdGNoZXN9IGZyb20gJy4vcGF0Y2gvYXBwbHknO1xuaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhdGNoL3BhcnNlJztcbmltcG9ydCB7c3RydWN0dXJlZFBhdGNoLCBjcmVhdGVUd29GaWxlc1BhdGNoLCBjcmVhdGVQYXRjaH0gZnJvbSAnLi9wYXRjaC9jcmVhdGUnO1xuXG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9ETVB9IGZyb20gJy4vY29udmVydC9kbXAnO1xuaW1wb3J0IHtjb252ZXJ0Q2hhbmdlc1RvWE1MfSBmcm9tICcuL2NvbnZlcnQveG1sJztcblxuZXhwb3J0IHtcbiAgRGlmZixcblxuICBkaWZmQ2hhcnMsXG4gIGRpZmZXb3JkcyxcbiAgZGlmZldvcmRzV2l0aFNwYWNlLFxuICBkaWZmTGluZXMsXG4gIGRpZmZUcmltbWVkTGluZXMsXG4gIGRpZmZTZW50ZW5jZXMsXG5cbiAgZGlmZkNzcyxcbiAgZGlmZkpzb24sXG5cbiAgc3RydWN0dXJlZFBhdGNoLFxuICBjcmVhdGVUd29GaWxlc1BhdGNoLFxuICBjcmVhdGVQYXRjaCxcbiAgYXBwbHlQYXRjaCxcbiAgYXBwbHlQYXRjaGVzLFxuICBwYXJzZVBhdGNoLFxuICBjb252ZXJ0Q2hhbmdlc1RvRE1QLFxuICBjb252ZXJ0Q2hhbmdlc1RvWE1MLFxuICBjYW5vbmljYWxpemVcbn07XG4iXX0=


/***/ }),

/***/ 3185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.characterDiff = undefined;
exports. /*istanbul ignore end*/diffChars = diffChars;

var /*istanbul ignore start*/_base = __webpack_require__(2672) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/var characterDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/characterDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
function diffChars(oldStr, newStr, callback) {
  return characterDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O2dDQUdnQjs7QUFIaEI7Ozs7Ozs7dUJBRU8sSUFBTSx5RkFBZ0IscUVBQWhCO0FBQ04sU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCLE1BQTNCLEVBQW1DLFFBQW5DLEVBQTZDO0FBQUUsU0FBTyxjQUFjLElBQWQsQ0FBbUIsTUFBbkIsRUFBMkIsTUFBM0IsRUFBbUMsUUFBbkMsQ0FBUCxDQUFGO0NBQTdDIiwiZmlsZSI6ImNoYXJhY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBjaGFyYWN0ZXJEaWZmID0gbmV3IERpZmYoKTtcbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ2hhcnMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBjaGFyYWN0ZXJEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTsgfVxuIl19


/***/ }),

/***/ 3186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.wordDiff = undefined;
exports. /*istanbul ignore end*/diffWords = diffWords;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = diffWordsWithSpace;

var /*istanbul ignore start*/_base = __webpack_require__(2672) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

/*istanbul ignore end*/
var /*istanbul ignore start*/_params = __webpack_require__(2844) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/

// Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF
var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;

var reWhitespace = /\S/;

var wordDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/wordDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
wordDiff.equals = function (left, right) {
  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};
wordDiff.tokenize = function (value) {
  var tokens = value.split(/(\s+|\b)/);

  // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.
  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

function diffWords(oldStr, newStr, callback) {
  var options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(callback, { ignoreWhitespace: true });
  return wordDiff.diff(oldStr, newStr, options);
}
function diffWordsWithSpace(oldStr, newStr, callback) {
  return wordDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztnQ0ErQ2dCO3lEQUlBOztBQW5EaEI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLElBQU0sb0JBQW9CLCtEQUFwQjs7QUFFTixJQUFNLGVBQWUsSUFBZjs7QUFFQyxJQUFNLCtFQUFXLHFFQUFYO0FBQ2IsU0FBUyxNQUFULEdBQWtCLFVBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0I7QUFDdEMsU0FBTyxTQUFTLEtBQVQsSUFBbUIsS0FBSyxPQUFMLENBQWEsZ0JBQWIsSUFBaUMsQ0FBQyxhQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FBRCxJQUE0QixDQUFDLGFBQWEsSUFBYixDQUFrQixLQUFsQixDQUFELENBRGpEO0NBQXRCO0FBR2xCLFNBQVMsUUFBVCxHQUFvQixVQUFTLEtBQVQsRUFBZ0I7QUFDbEMsTUFBSSxTQUFTLE1BQU0sS0FBTixDQUFZLFVBQVosQ0FBVDs7O0FBRDhCLE9BSTdCLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFPLE1BQVAsR0FBZ0IsQ0FBaEIsRUFBbUIsR0FBdkMsRUFBNEM7O0FBRTFDLFFBQUksQ0FBQyxPQUFPLElBQUksQ0FBSixDQUFSLElBQWtCLE9BQU8sSUFBSSxDQUFKLENBQXpCLElBQ0ssa0JBQWtCLElBQWxCLENBQXVCLE9BQU8sQ0FBUCxDQUF2QixDQURMLElBRUssa0JBQWtCLElBQWxCLENBQXVCLE9BQU8sSUFBSSxDQUFKLENBQTlCLENBRkwsRUFFNEM7QUFDOUMsYUFBTyxDQUFQLEtBQWEsT0FBTyxJQUFJLENBQUosQ0FBcEIsQ0FEOEM7QUFFOUMsYUFBTyxNQUFQLENBQWMsSUFBSSxDQUFKLEVBQU8sQ0FBckIsRUFGOEM7QUFHOUMsVUFIOEM7S0FGaEQ7R0FGRjs7QUFXQSxTQUFPLE1BQVAsQ0Fma0M7Q0FBaEI7O0FBa0JiLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixNQUEzQixFQUFtQyxRQUFuQyxFQUE2QztBQUNsRCxNQUFJLFVBQVUsOEVBQWdCLFFBQWhCLEVBQTBCLEVBQUMsa0JBQWtCLElBQWxCLEVBQTNCLENBQVYsQ0FEOEM7QUFFbEQsU0FBTyxTQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLE1BQXRCLEVBQThCLE9BQTlCLENBQVAsQ0FGa0Q7Q0FBN0M7QUFJQSxTQUFTLGtCQUFULENBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLFFBQTVDLEVBQXNEO0FBQzNELFNBQU8sU0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixRQUE5QixDQUFQLENBRDJEO0NBQXREIiwiZmlsZSI6IndvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtnZW5lcmF0ZU9wdGlvbnN9IGZyb20gJy4uL3V0aWwvcGFyYW1zJztcblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fc2NyaXB0X2luX1VuaWNvZGVcbi8vXG4vLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4vLyBMYXRpbi0xIFN1cHBsZW1lbnQsIDAwODDigJMwMEZGXG4vLyAgLSBVKzAwRDcgIMOXIE11bHRpcGxpY2F0aW9uIHNpZ25cbi8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuLy8gTGF0aW4gRXh0ZW5kZWQtQSwgMDEwMOKAkzAxN0Zcbi8vIExhdGluIEV4dGVuZGVkLUIsIDAxODDigJMwMjRGXG4vLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbi8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVycywgMDJCMOKAkzAyRkZcbi8vICAtIFUrMDJDNyAgy4cgJiM3MTE7ICBDYXJvblxuLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4vLyAgLSBVKzAyRDkgIMuZICYjNzI5OyAgRG90IEFib3ZlXG4vLyAgLSBVKzAyREEgIMuaICYjNzMwOyAgUmluZyBBYm92ZVxuLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuLy8gIC0gVSswMkRDICDLnCAmIzczMjsgIFNtYWxsIFRpbGRlXG4vLyAgLSBVKzAyREQgIMudICYjNzMzOyAgRG91YmxlIEFjdXRlIEFjY2VudFxuLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcbmNvbnN0IGV4dGVuZGVkV29yZENoYXJzID0gL15bYS16QS1aXFx1e0MwfS1cXHV7RkZ9XFx1e0Q4fS1cXHV7RjZ9XFx1e0Y4fS1cXHV7MkM2fVxcdXsyQzh9LVxcdXsyRDd9XFx1ezJERX0tXFx1ezJGRn1cXHV7MUUwMH0tXFx1ezFFRkZ9XSskL3U7XG5cbmNvbnN0IHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xuXG5leHBvcnQgY29uc3Qgd29yZERpZmYgPSBuZXcgRGlmZigpO1xud29yZERpZmYuZXF1YWxzID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QobGVmdCkgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KHJpZ2h0KSk7XG59O1xud29yZERpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBsZXQgdG9rZW5zID0gdmFsdWUuc3BsaXQoLyhcXHMrfFxcYikvKTtcblxuICAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgIGlmICghdG9rZW5zW2kgKyAxXSAmJiB0b2tlbnNbaSArIDJdXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgbGV0IG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmV29yZHNXaXRoU3BhY2Uob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7XG59XG4iXX0=


/***/ }),

/***/ 3187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.sentenceDiff = undefined;
exports. /*istanbul ignore end*/diffSentences = diffSentences;

var /*istanbul ignore start*/_base = __webpack_require__(2672) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/var sentenceDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/sentenceDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

function diffSentences(oldStr, newStr, callback) {
  return sentenceDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Z0NBUWdCOztBQVJoQjs7Ozs7Ozt1QkFHTyxJQUFNLHVGQUFlLHFFQUFmO0FBQ2IsYUFBYSxRQUFiLEdBQXdCLFVBQVMsS0FBVCxFQUFnQjtBQUN0QyxTQUFPLE1BQU0sS0FBTixDQUFZLHVCQUFaLENBQVAsQ0FEc0M7Q0FBaEI7O0FBSWpCLFNBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRDtBQUFFLFNBQU8sYUFBYSxJQUFiLENBQWtCLE1BQWxCLEVBQTBCLE1BQTFCLEVBQWtDLFFBQWxDLENBQVAsQ0FBRjtDQUFqRCIsImZpbGUiOiJzZW50ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5zZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),

/***/ 3188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.cssDiff = undefined;
exports. /*istanbul ignore end*/diffCss = diffCss;

var /*istanbul ignore start*/_base = __webpack_require__(2672) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/var cssDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/cssDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function diffCss(oldStr, newStr, callback) {
  return cssDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O2dDQU9nQjs7QUFQaEI7Ozs7Ozs7dUJBRU8sSUFBTSw2RUFBVSxxRUFBVjtBQUNiLFFBQVEsUUFBUixHQUFtQixVQUFTLEtBQVQsRUFBZ0I7QUFDakMsU0FBTyxNQUFNLEtBQU4sQ0FBWSxlQUFaLENBQVAsQ0FEaUM7Q0FBaEI7O0FBSVosU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLFFBQWpDLEVBQTJDO0FBQUUsU0FBTyxRQUFRLElBQVIsQ0FBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLENBQVAsQ0FBRjtDQUEzQyIsImZpbGUiOiJjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgY29uc3QgY3NzRGlmZiA9IG5ldyBEaWZmKCk7XG5jc3NEaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oW3t9OjssXXxcXHMrKS8pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDc3Mob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBjc3NEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTsgfVxuIl19


/***/ }),

/***/ 3189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.jsonDiff = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports. /*istanbul ignore end*/diffJson = diffJson;
/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = canonicalize;

var /*istanbul ignore start*/_base = __webpack_require__(2672) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

/*istanbul ignore end*/
var /*istanbul ignore start*/_line = __webpack_require__(2764) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/

var objectPrototypeToString = Object.prototype.toString;

var jsonDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/jsonDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
// Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
jsonDiff.useLongestToken = true;

jsonDiff.tokenize = /*istanbul ignore start*/_line.lineDiff. /*istanbul ignore end*/tokenize;
jsonDiff.castInput = function (value) {
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value), undefined, '  ');
};
jsonDiff.equals = function (left, right) {
  return (/*istanbul ignore start*/_base2.default. /*istanbul ignore end*/prototype.equals(left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
  );
};

function diffJson(oldObj, newObj, callback) {
  return jsonDiff.diff(oldObj, newObj, callback);
}

// This function handles the presence of circular references by bailing out when encountering an
// object that is already on the "stack" of items being processed.
function canonicalize(obj, stack, replacementStack) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  var i = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);
    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
    }
    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if ( /*istanbul ignore start*/(typeof /*istanbul ignore end*/obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);
    var sortedKeys = [],
        key = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
    for (key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(key)) {
        sortedKeys.push(key);
      }
    }
    sortedKeys.sort();
    for (i = 0; i < sortedKeys.length; i += 1) {
      key = sortedKeys[i];
      canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
    }
    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }
  return canonicalizedObj;
}
//# sourceMappingURL=data:application/json;base64,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QjtLQUZGO0FBTUEsZUFBVyxJQUFYLEdBWjJDO0FBYTNDLFNBQUssSUFBSSxDQUFKLEVBQU8sSUFBSSxXQUFXLE1BQVgsRUFBbUIsS0FBSyxDQUFMLEVBQVE7QUFDekMsWUFBTSxXQUFXLENBQVgsQ0FBTixDQUR5QztBQUV6Qyx1QkFBaUIsR0FBakIsSUFBd0IsYUFBYSxJQUFJLEdBQUosQ0FBYixFQUF1QixLQUF2QixFQUE4QixnQkFBOUIsQ0FBeEIsQ0FGeUM7S0FBM0M7QUFJQSxVQUFNLEdBQU4sR0FqQjJDO0FBa0IzQyxxQkFBaUIsR0FBakIsR0FsQjJDO0dBQTdDLE1BbUJPO0FBQ0wsdUJBQW1CLEdBQW5CLENBREs7R0FuQlA7QUFzQkEsU0FBTyxnQkFBUCxDQXBEeUQ7Q0FBcEQiLCJmaWxlIjoianNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2xpbmVEaWZmfSBmcm9tICcuL2xpbmUnO1xuXG5jb25zdCBvYmplY3RQcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cblxuZXhwb3J0IGNvbnN0IGpzb25EaWZmID0gbmV3IERpZmYoKTtcbi8vIERpc2NyaW1pbmF0ZSBiZXR3ZWVuIHR3byBsaW5lcyBvZiBwcmV0dHktcHJpbnRlZCwgc2VyaWFsaXplZCBKU09OIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyBhXG4vLyBkYW5nbGluZyBjb21tYSBhbmQgdGhlIG90aGVyIGRvZXNuJ3QuIFR1cm5zIG91dCBpbmNsdWRpbmcgdGhlIGRhbmdsaW5nIGNvbW1hIHlpZWxkcyB0aGUgbmljZXN0IG91dHB1dDpcbmpzb25EaWZmLnVzZUxvbmdlc3RUb2tlbiA9IHRydWU7XG5cbmpzb25EaWZmLnRva2VuaXplID0gbGluZURpZmYudG9rZW5pemU7XG5qc29uRGlmZi5jYXN0SW5wdXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlKSwgdW5kZWZpbmVkLCAnICAnKTtcbn07XG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzKGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgY2FsbGJhY2spIHsgcmV0dXJuIGpzb25EaWZmLmRpZmYob2xkT2JqLCBuZXdPYmosIGNhbGxiYWNrKTsgfVxuXG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgcHJlc2VuY2Ugb2YgY2lyY3VsYXIgcmVmZXJlbmNlcyBieSBiYWlsaW5nIG91dCB3aGVuIGVuY291bnRlcmluZyBhblxuLy8gb2JqZWN0IHRoYXQgaXMgYWxyZWFkeSBvbiB0aGUgXCJzdGFja1wiIG9mIGl0ZW1zIGJlaW5nIHByb2Nlc3NlZC5cbmV4cG9ydCBmdW5jdGlvbiBjYW5vbmljYWxpemUob2JqLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaykge1xuICBzdGFjayA9IHN0YWNrIHx8IFtdO1xuICByZXBsYWNlbWVudFN0YWNrID0gcmVwbGFjZW1lbnRTdGFjayB8fCBbXTtcblxuICBsZXQgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc3RhY2tbaV0gPT09IG9iaikge1xuICAgICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhY2tbaV07XG4gICAgfVxuICB9XG5cbiAgbGV0IGNhbm9uaWNhbGl6ZWRPYmo7XG5cbiAgaWYgKCdbb2JqZWN0IEFycmF5XScgPT09IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nLmNhbGwob2JqKSkge1xuICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICBjYW5vbmljYWxpemVkT2JqID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjYW5vbmljYWxpemVkT2JqW2ldID0gY2Fub25pY2FsaXplKG9ialtpXSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2spO1xuICAgIH1cbiAgICBzdGFjay5wb3AoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICAgIHJldHVybiBjYW5vbmljYWxpemVkT2JqO1xuICB9XG5cbiAgaWYgKG9iaiAmJiBvYmoudG9KU09OKSB7XG4gICAgb2JqID0gb2JqLnRvSlNPTigpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkge1xuICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICBjYW5vbmljYWxpemVkT2JqID0ge307XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xuICAgIGxldCBzb3J0ZWRLZXlzID0gW10sXG4gICAgICAgIGtleTtcbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc29ydGVkS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRlZEtleXMuc29ydCgpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3J0ZWRLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBrZXkgPSBzb3J0ZWRLZXlzW2ldO1xuICAgICAgY2Fub25pY2FsaXplZE9ialtrZXldID0gY2Fub25pY2FsaXplKG9ialtrZXldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjayk7XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpO1xuICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IG9iajtcbiAgfVxuICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbn1cbiJdfQ==


/***/ }),

/***/ 3190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/applyPatch = applyPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = applyPatches;

var /*istanbul ignore start*/_parse = __webpack_require__(2845) /*istanbul ignore end*/;

var /*istanbul ignore start*/_distanceIterator = __webpack_require__(3191) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _distanceIterator2 = _interopRequireDefault(_distanceIterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/function applyPatch(source, uniDiff) {
  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  if (typeof uniDiff === 'string') {
    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
  }

  if (Array.isArray(uniDiff)) {
    if (uniDiff.length > 1) {
      throw new Error('applyPatch only works with a single input.');
    }

    uniDiff = uniDiff[0];
  }

  // Apply the diff to the input
  var lines = source.split('\n'),
      hunks = uniDiff.hunks,
      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) /*istanbul ignore start*/{
    return (/*istanbul ignore end*/line === patchContent
    );
  },
      errorCount = 0,
      fuzzFactor = options.fuzzFactor || 0,
      minLine = 0,
      offset = 0,
      removeEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
      addEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

  /**
   * Checks if the hunk exactly fits on the provided location
   */
  function hunkFits(hunk, toPos) {
    for (var j = 0; j < hunk.lines.length; j++) {
      var line = hunk.lines[j],
          operation = line[0],
          content = line.substr(1);

      if (operation === ' ' || operation === '-') {
        // Context sanity check
        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
          errorCount++;

          if (errorCount > fuzzFactor) {
            return false;
          }
        }
        toPos++;
      }
    }

    return true;
  }

  // Search best fit offsets for each hunk based on the previous ones
  for (var i = 0; i < hunks.length; i++) {
    var hunk = hunks[i],
        maxLine = lines.length - hunk.oldLines,
        localOffset = 0,
        toPos = offset + hunk.oldStart - 1;

    var iterator = /*istanbul ignore start*/(0, _distanceIterator2.default) /*istanbul ignore end*/(toPos, minLine, maxLine);

    for (; localOffset !== undefined; localOffset = iterator()) {
      if (hunkFits(hunk, toPos + localOffset)) {
        hunk.offset = offset += localOffset;
        break;
      }
    }

    if (localOffset === undefined) {
      return false;
    }

    // Set lower text limit to end of the current hunk, so next ones don't try
    // to fit over already patched text
    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
  }

  // Apply patch hunks
  for (var _i = 0; _i < hunks.length; _i++) {
    var _hunk = hunks[_i],
        _toPos = _hunk.offset + _hunk.newStart - 1;
    if (_hunk.newLines == 0) {
      _toPos++;
    }

    for (var j = 0; j < _hunk.lines.length; j++) {
      var line = _hunk.lines[j],
          operation = line[0],
          content = line.substr(1);

      if (operation === ' ') {
        _toPos++;
      } else if (operation === '-') {
        lines.splice(_toPos, 1);
        /* istanbul ignore else */
      } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
    }
  }

  // Handle EOFNL insertion/removal
  if (removeEOFNL) {
    while (!lines[lines.length - 1]) {
      lines.pop();
    }
  } else if (addEOFNL) {
    lines.push('');
  }
  return lines.join('\n');
}

// Wrapper that supports multiple file patches via callbacks.
function applyPatches(uniDiff, options) {
  if (typeof uniDiff === 'string') {
    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
  }

  var currentIndex = 0;
  function processIndex() {
    var index = uniDiff[currentIndex++];
    if (!index) {
      return options.complete();
    }

    options.loadFile(index, function (err, data) {
      if (err) {
        return options.complete(err);
      }

      var updatedContent = applyPatch(data, index, options);
      options.patched(index, updatedContent);

      setTimeout(processIndex, 0);
    });
  }
  processIndex();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBR2dCO3lEQXNIQTs7QUF6SGhCOztBQUNBOzs7Ozs7O3VCQUVPLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixPQUE1QixFQUFtRDtzREFBZCxnRUFBVSxrQkFBSTs7QUFDeEQsTUFBSSxPQUFPLE9BQVAsS0FBbUIsUUFBbkIsRUFBNkI7QUFDL0IsY0FBVSx3RUFBVyxPQUFYLENBQVYsQ0FEK0I7R0FBakM7O0FBSUEsTUFBSSxNQUFNLE9BQU4sQ0FBYyxPQUFkLENBQUosRUFBNEI7QUFDMUIsUUFBSSxRQUFRLE1BQVIsR0FBaUIsQ0FBakIsRUFBb0I7QUFDdEIsWUFBTSxJQUFJLEtBQUosQ0FBVSw0Q0FBVixDQUFOLENBRHNCO0tBQXhCOztBQUlBLGNBQVUsUUFBUSxDQUFSLENBQVYsQ0FMMEI7R0FBNUI7OztBQUx3RCxNQWNwRCxRQUFRLE9BQU8sS0FBUCxDQUFhLElBQWIsQ0FBUjtNQUNBLFFBQVEsUUFBUSxLQUFSO01BRVIsY0FBYyxRQUFRLFdBQVIsSUFBd0IsVUFBQyxVQUFELEVBQWEsSUFBYixFQUFtQixTQUFuQixFQUE4QixZQUE5QjttQ0FBK0MsU0FBUyxZQUFUOztHQUEvQztNQUN0QyxhQUFhLENBQWI7TUFDQSxhQUFhLFFBQVEsVUFBUixJQUFzQixDQUF0QjtNQUNiLFVBQVUsQ0FBVjtNQUNBLFNBQVMsQ0FBVDtNQUVBLHFFQVRKO01BVUksa0VBVko7Ozs7O0FBZHdELFdBNkIvQyxRQUFULENBQWtCLElBQWxCLEVBQXdCLEtBQXhCLEVBQStCO0FBQzdCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUIsR0FBdkMsRUFBNEM7QUFDMUMsVUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBUDtVQUNBLFlBQVksS0FBSyxDQUFMLENBQVo7VUFDQSxVQUFVLEtBQUssTUFBTCxDQUFZLENB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QUFOLEdBRCtCO0tBQWpDO0dBREYsTUFJTyxJQUFJLFFBQUosRUFBYztBQUNuQixVQUFNLElBQU4sQ0FBVyxFQUFYLEVBRG1CO0dBQWQ7QUFHUCxTQUFPLE1BQU0sSUFBTixDQUFXLElBQVgsQ0FBUCxDQWxId0Q7Q0FBbkQ7OztBQXNIQSxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0M7QUFDN0MsTUFBSSxPQUFPLE9BQVAsS0FBbUIsUUFBbkIsRUFBNkI7QUFDL0IsY0FBVSx3RUFBVyxPQUFYLENBQVYsQ0FEK0I7R0FBakM7O0FBSUEsTUFBSSxlQUFlLENBQWYsQ0FMeUM7QUFNN0MsV0FBUyxZQUFULEdBQXdCO0FBQ3RCLFFBQUksUUFBUSxRQUFRLGNBQVIsQ0FBUixDQURrQjtBQUV0QixRQUFJLENBQUMsS0FBRCxFQUFRO0FBQ1YsYUFBTyxRQUFRLFFBQVIsRUFBUCxDQURVO0tBQVo7O0FBSUEsWUFBUSxRQUFSLENBQWlCLEtBQWpCLEVBQXdCLFVBQVMsR0FBVCxFQUFjLElBQWQsRUFBb0I7QUFDMUMsVUFBSSxHQUFKLEVBQVM7QUFDUCxlQUFPLFFBQVEsUUFBUixDQUFpQixHQUFqQixDQUFQLENBRE87T0FBVDs7QUFJQSxVQUFJLGlCQUFpQixXQUFXLElBQVgsRUFBaUIsS0FBakIsRUFBd0IsT0FBeEIsQ0FBakIsQ0FMc0M7QUFNMUMsY0FBUSxPQUFSLENBQWdCLEtBQWhCLEVBQXVCLGNBQXZCLEVBTjBDOztBQVExQyxpQkFBVyxZQUFYLEVBQXlCLENBQXpCLEVBUjBDO0tBQXBCLENBQXhCLENBTnNCO0dBQXhCO0FBaUJBLGlCQXZCNkM7Q0FBeEMiLCJmaWxlIjoiYXBwbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhcnNlUGF0Y2h9IGZyb20gJy4vcGFyc2UnO1xuaW1wb3J0IGRpc3RhbmNlSXRlcmF0b3IgZnJvbSAnLi4vdXRpbC9kaXN0YW5jZS1pdGVyYXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGNoKHNvdXJjZSwgdW5pRGlmZiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHVuaURpZmYpKSB7XG4gICAgaWYgKHVuaURpZmYubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcHBseVBhdGNoIG9ubHkgd29ya3Mgd2l0aCBhIHNpbmdsZSBpbnB1dC4nKTtcbiAgICB9XG5cbiAgICB1bmlEaWZmID0gdW5pRGlmZlswXTtcbiAgfVxuXG4gIC8vIEFwcGx5IHRoZSBkaWZmIHRvIHRoZSBpbnB1dFxuICBsZXQgbGluZXMgPSBzb3VyY2Uuc3BsaXQoJ1xcbicpLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghY29tcGFyZUxpbmUodG9Qb3MgKyAxLCBsaW5lc1t0b1Bvc10sIG9wZXJhdGlvbiwgY29udGVudCkpIHtcbiAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIG1heExpbmUgPSBsaW5lcy5sZW5ndGggLSBodW5rLm9sZExpbmVzLFxuICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgIHRvUG9zID0gb2Zmc2V0ICsgaHVuay5vbGRTdGFydCAtIDE7XG5cbiAgICBsZXQgaXRlcmF0b3IgPSBkaXN0YW5jZUl0ZXJhdG9yKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcbiAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbG93ZXIgdGV4dCBsaW1pdCB0byBlbmQgb2YgdGhlIGN1cnJlbnQgaHVuaywgc28gbmV4dCBvbmVzIGRvbid0IHRyeVxuICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG4gICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICAvLyBBcHBseSBwYXRjaCBodW5rc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgdG9Qb3MgPSBodW5rLm9mZnNldCArIGh1bmsubmV3U3RhcnQgLSAxO1xuICAgIGlmIChodW5rLm5ld0xpbmVzID09IDApIHsgdG9Qb3MrKzsgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBodW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgbGluZSA9IGh1bmsubGluZXNbal0sXG4gICAgICAgICAgb3BlcmF0aW9uID0gbGluZVswXSxcbiAgICAgICAgICBjb250ZW50ID0gbGluZS5zdWJzdHIoMSk7XG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xuICAgICAgICB0b1BvcysrO1xuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICBsaW5lcy5zcGxpY2UodG9Qb3MsIDEpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKHRvUG9zLCAwLCBjb250ZW50KTtcbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzT3BlcmF0aW9uID0gaHVuay5saW5lc1tqIC0gMV0gPyBodW5rLmxpbmVzW2ogLSAxXVswXSA6IG51bGw7XG4gICAgICAgIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgcmVtb3ZlRU9GTkwgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICBhZGRFT0ZOTCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgRU9GTkwgaW5zZXJ0aW9uL3JlbW92YWxcbiAgaWYgKHJlbW92ZUVPRk5MKSB7XG4gICAgd2hpbGUgKCFsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSkge1xuICAgICAgbGluZXMucG9wKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgbGluZXMucHVzaCgnJyk7XG4gIH1cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBXcmFwcGVyIHRoYXQgc3VwcG9ydHMgbXVsdGlwbGUgZmlsZSBwYXRjaGVzIHZpYSBjYWxsYmFja3MuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gIGZ1bmN0aW9uIHByb2Nlc3NJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSB1bmlEaWZmW2N1cnJlbnRJbmRleCsrXTtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXBkYXRlZENvbnRlbnQgPSBhcHBseVBhdGNoKGRhdGEsIGluZGV4LCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMucGF0Y2hlZChpbmRleCwgdXBkYXRlZENvbnRlbnQpO1xuXG4gICAgICBzZXRUaW1lb3V0KHByb2Nlc3NJbmRleCwgMCk7XG4gICAgfSk7XG4gIH1cbiAgcHJvY2Vzc0luZGV4KCk7XG59XG4iXX0=


/***/ }),

/***/ 3191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;

exports.default = /*istanbul ignore end*/function (start, minLine, maxLine) {
  var wantForward = true,
      backwardExhausted = false,
      forwardExhausted = false,
      localOffset = 1;

  return function iterator() {
    if (wantForward && !forwardExhausted) {
      if (backwardExhausted) {
        localOffset++;
      } else {
        wantForward = false;
      }

      // Check if trying to fit beyond text length, and if not, check it fits
      // after offset location (or desired location on first iteration)
      if (start + localOffset <= maxLine) {
        return localOffset;
      }

      forwardExhausted = true;
    }

    if (!backwardExhausted) {
      if (!forwardExhausted) {
        wantForward = true;
      }

      // Check if trying to fit before text beginning, and if not, check it fits
      // before offset location
      if (minLine <= start - localOffset) {
        return - localOffset++;
      }

      backwardExhausted = true;
      return iterator();
    }

    // We tried to fit hunk before text beginning and beyond text lenght, then
    // hunk can't fit on the text. Return undefined
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7eUNBR2UsVUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCLE9BQXpCLEVBQWtDO0FBQy9DLE1BQUksY0FBYyxJQUFkO01BQ0Esb0JBQW9CLEtBQXBCO01BQ0EsbUJBQW1CLEtBQW5CO01BQ0EsY0FBYyxDQUFkLENBSjJDOztBQU0vQyxTQUFPLFNBQVMsUUFBVCxHQUFvQjtBQUN6QixRQUFJLGVBQWUsQ0FBQyxnQkFBRCxFQUFtQjtBQUNwQyxVQUFJLGlCQUFKLEVBQXVCO0FBQ3JCLHNCQURxQjtPQUF2QixNQUVPO0FBQ0wsc0JBQWMsS0FBZCxDQURLO09BRlA7Ozs7QUFEb0MsVUFTaEMsUUFBUSxXQUFSLElBQXVCLE9BQXZCLEVBQWdDO0FBQ2xDLGVBQU8sV0FBUCxDQURrQztPQUFwQzs7QUFJQSx5QkFBbUIsSUFBbkIsQ0Fib0M7S0FBdEM7O0FBZ0JBLFFBQUksQ0FBQyxpQkFBRCxFQUFvQjtBQUN0QixVQUFJLENBQUMsZ0JBQUQsRUFBbUI7QUFDckIsc0JBQWMsSUFBZCxDQURxQjtPQUF2Qjs7OztBQURzQixVQU9sQixXQUFXLFFBQVEsV0FBUixFQUFxQjtBQUNsQyxlQUFPLEVBQUMsYUFBRCxDQUQyQjtPQUFwQzs7QUFJQSwwQkFBb0IsSUFBcEIsQ0FYc0I7QUFZdEIsYUFBTyxVQUFQLENBWnNCO0tBQXhCOzs7O0FBakJ5QixHQUFwQixDQU53QztDQUFsQyIsImZpbGUiOiJkaXN0YW5jZS1pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEl0ZXJhdG9yIHRoYXQgdHJhdmVyc2VzIGluIHRoZSByYW5nZSBvZiBbbWluLCBtYXhdLCBzdGVwcGluZ1xuLy8gYnkgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0YXJ0IHBvc2l0aW9uLiBJLmUuIGZvciBbMCwgNF0sIHdpdGhcbi8vIHN0YXJ0IG9mIDIsIHRoaXMgd2lsbCBpdGVyYXRlIDIsIDMsIDEsIDQsIDAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgbWluTGluZSwgbWF4TGluZSkge1xuICBsZXQgd2FudEZvcndhcmQgPSB0cnVlLFxuICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSBmYWxzZSxcbiAgICAgIGZvcndhcmRFeGhhdXN0ZWQgPSBmYWxzZSxcbiAgICAgIGxvY2FsT2Zmc2V0ID0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgaWYgKHdhbnRGb3J3YXJkICYmICFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICBpZiAoYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgbG9jYWxPZmZzZXQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhbnRGb3J3YXJkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmV5b25kIHRleHQgbGVuZ3RoLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAvLyBhZnRlciBvZmZzZXQgbG9jYXRpb24gKG9yIGRlc2lyZWQgbG9jYXRpb24gb24gZmlyc3QgaXRlcmF0aW9uKVxuICAgICAgaWYgKHN0YXJ0ICsgbG9jYWxPZmZzZXQgPD0gbWF4TGluZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIGZvcndhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmICghZm9yd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICB3YW50Rm9yd2FyZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmVmb3JlIHRleHQgYmVnaW5uaW5nLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAvLyBiZWZvcmUgb2Zmc2V0IGxvY2F0aW9uXG4gICAgICBpZiAobWluTGluZSA8PSBzdGFydCAtIGxvY2FsT2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAtbG9jYWxPZmZzZXQrKztcbiAgICAgIH1cblxuICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yKCk7XG4gICAgfVxuXG4gICAgLy8gV2UgdHJpZWQgdG8gZml0IGh1bmsgYmVmb3JlIHRleHQgYmVnaW5uaW5nIGFuZCBiZXlvbmQgdGV4dCBsZW5naHQsIHRoZW5cbiAgICAvLyBodW5rIGNhbid0IGZpdCBvbiB0aGUgdGV4dC4gUmV0dXJuIHVuZGVmaW5lZFxuICB9O1xufVxuIl19


/***/ }),

/***/ 3192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/structuredPatch = structuredPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = createTwoFilesPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = createPatch;

var /*istanbul ignore start*/_line = __webpack_require__(2764) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*istanbul ignore end*/function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  if (!options) {
    options = { context: 4 };
  }

  var diff = /*istanbul ignore start*/(0, _line.diffLines) /*istanbul ignore end*/(oldStr, newStr);
  diff.push({ value: '', lines: [] }); // Append an empty value to make cleanup easier

  function contextLines(lines) {
    return lines.map(function (entry) {
      return ' ' + entry;
    });
  }

  var hunks = [];
  var oldRangeStart = 0,
      newRangeStart = 0,
      curRange = [],
      oldLine = 1,
      newLine = 1;
  /*istanbul ignore start*/
  var _loop = function _loop( /*istanbul ignore end*/i) {
    var current = diff[i],
        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
    current.lines = lines;

    if (current.added || current.removed) {
      /*istanbul ignore start*/
      var _curRange;

      /*istanbul ignore end*/
      // If we have previous context, start with that
      if (!oldRangeStart) {
        var prev = diff[i - 1];
        oldRangeStart = oldLine;
        newRangeStart = newLine;

        if (prev) {
          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
          oldRangeStart -= curRange.length;
          newRangeStart -= curRange.length;
        }
      }

      // Output our changes
      /*istanbul ignore start*/(_curRange = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/lines.map(function (entry) {
        return (current.added ? '+' : '-') + entry;
      })));

      // Track the updated file position
      if (current.added) {
        newLine += lines.length;
      } else {
        oldLine += lines.length;
      }
    } else {
      // Identical context lines. Track line changes
      if (oldRangeStart) {
        // Close out any changes that have been output (or join overlapping)
        if (lines.length <= options.context * 2 && i < diff.length - 2) {
          /*istanbul ignore start*/
          var _curRange2;

          /*istanbul ignore end*/
          // Overlapping
          /*istanbul ignore start*/(_curRange2 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines)));
        } else {
          /*istanbul ignore start*/
          var _curRange3;

          /*istanbul ignore end*/
          // end the range and output
          var contextSize = Math.min(lines.length, options.context);
          /*istanbul ignore start*/(_curRange3 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines.slice(0, contextSize))));

          var hunk = {
            oldStart: oldRangeStart,
            oldLines: oldLine - oldRangeStart + contextSize,
            newStart: newRangeStart,
            newLines: newLine - newRangeStart + contextSize,
            lines: curRange
          };
          if (i >= diff.length - 2 && lines.length <= options.context) {
            // EOF is inside this hunk
            var oldEOFNewline = /\n$/.test(oldStr);
            var newEOFNewline = /\n$/.test(newStr);
            if (lines.length == 0 && !oldEOFNewline) {
              // special case: old has no eol and no trailing context; no-nl can end up before adds
              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
            } else if (!oldEOFNewline || !newEOFNewline) {
              curRange.push('\\ No newline at end of file');
            }
          }
          hunks.push(hunk);

          oldRangeStart = 0;
          newRangeStart = 0;
          curRange = [];
        }
      }
      oldLine += lines.length;
      newLine += lines.length;
    }
  };

  for (var i = 0; i < diff.length; i++) {
    /*istanbul ignore start*/
    _loop( /*istanbul ignore end*/i);
  }

  return {
    oldFileName: oldFileName, newFileName: newFileName,
    oldHeader: oldHeader, newHeader: newHeader,
    hunks: hunks
  };
}

function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);

  var ret = [];
  if (oldFileName == newFileName) {
    ret.push('Index: ' + oldFileName);
  }
  ret.push('===================================================================');
  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

  for (var i = 0; i < diff.hunks.length; i++) {
    var hunk = diff.hunks[i];
    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
    ret.push.apply(ret, hunk.lines);
  }

  return ret.join('\n') + '\n';
}

function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dDQUVnQjt5REE4RkE7eURBd0JBOztBQXhIaEI7Ozs7O3VCQUVPLFNBQVMsZUFBVCxDQUF5QixXQUF6QixFQUFzQyxXQUF0QyxFQUFtRCxNQUFuRCxFQUEyRCxNQUEzRCxFQUFtRSxTQUFuRSxFQUE4RSxTQUE5RSxFQUF5RixPQUF6RixFQUFrRztBQUN2RyxNQUFJLENBQUMsT0FBRCxFQUFVO0FBQ1osY0FBVSxFQUFFLFNBQVMsQ0FBVCxFQUFaLENBRFk7R0FBZDs7QUFJQSxNQUFNLE9BQU8sc0VBQVUsTUFBVixFQUFrQixNQUFsQixDQUFQLENBTGlHO0FBTXZHLE9BQUssSUFBTCxDQUFVLEVBQUMsT0FBTyxFQUFQLEVBQVcsT0FBTyxFQUFQLEVBQXRCOztBQU51RyxXQVE5RixZQUFULENBQXNCLEtBQXRCLEVBQTZCO0FBQzNCLFdBQU8sTUFBTSxHQUFOLENBQVUsVUFBUyxLQUFULEVBQWdCO0FBQUUsYUFBTyxNQUFNLEtBQU4sQ0FBVDtLQUFoQixDQUFqQixDQUQyQjtHQUE3Qjs7QUFJQSxNQUFJLFFBQVEsRUFBUixDQVptRztBQWF2RyxNQUFJLGdCQUFnQixDQUFoQjtNQUFtQixnQkFBZ0IsQ0FBaEI7TUFBbUIsV0FBVyxFQUFYO01BQ3RDLFVBQVUsQ0FBVjtNQUFhLFVBQVUsQ0FBVixDQWRzRjs7cURBZTlGO0FBQ1AsUUFBTSxVQUFVLEtBQUssQ0FBTCxDQUFWO1FBQ0EsUUFBUSxRQUFRLEtBQVIsSUFBaUIsUUFBUSxLQUFSLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE2QixFQUE3QixFQUFpQyxLQUFqQyxDQUF1QyxJQUF2QyxDQUFqQjtBQUNkLFlBQVEsS0FBUixHQUFnQixLQUFoQjs7QUFFQSxRQUFJLFFBQVEsS0FBUixJQUFpQixRQUFRLE9BQVIsRUFBaUI7Ozs7OztBQUVwQyxVQUFJLENBQUMsYUFBRCxFQUFnQjtBQUNsQixZQUFNLE9BQU8sS0FB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LENBQVMsSUFBVCxJQUFpQixJQUFqQixDQXJCb0c7Q0FBdEc7O0FBd0JBLFNBQVMsV0FBVCxDQUFxQixRQUFyQixFQUErQixNQUEvQixFQUF1QyxNQUF2QyxFQUErQyxTQUEvQyxFQUEwRCxTQUExRCxFQUFxRSxPQUFyRSxFQUE4RTtBQUNuRixTQUFPLG9CQUFvQixRQUFwQixFQUE4QixRQUE5QixFQUF3QyxNQUF4QyxFQUFnRCxNQUFoRCxFQUF3RCxTQUF4RCxFQUFtRSxTQUFuRSxFQUE4RSxPQUE5RSxDQUFQLENBRG1GO0NBQTlFIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGlmZkxpbmVzfSBmcm9tICcuLi9kaWZmL2xpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7IGNvbnRleHQ6IDQgfTtcbiAgfVxuXG4gIGNvbnN0IGRpZmYgPSBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIpO1xuICBkaWZmLnB1c2goe3ZhbHVlOiAnJywgbGluZXM6IFtdfSk7ICAgLy8gQXBwZW5kIGFuIGVtcHR5IHZhbHVlIHRvIG1ha2UgY2xlYW51cCBlYXNpZXJcblxuICBmdW5jdGlvbiBjb250ZXh0TGluZXMobGluZXMpIHtcbiAgICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7IHJldHVybiAnICcgKyBlbnRyeTsgfSk7XG4gIH1cblxuICBsZXQgaHVua3MgPSBbXTtcbiAgbGV0IG9sZFJhbmdlU3RhcnQgPSAwLCBuZXdSYW5nZVN0YXJ0ID0gMCwgY3VyUmFuZ2UgPSBbXSxcbiAgICAgIG9sZExpbmUgPSAxLCBuZXdMaW5lID0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRpZmZbaV0sXG4gICAgICAgICAgbGluZXMgPSBjdXJyZW50LmxpbmVzIHx8IGN1cnJlbnQudmFsdWUucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJyk7XG4gICAgY3VycmVudC5saW5lcyA9IGxpbmVzO1xuXG4gICAgaWYgKGN1cnJlbnQuYWRkZWQgfHwgY3VycmVudC5yZW1vdmVkKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIHByZXZpb3VzIGNvbnRleHQsIHN0YXJ0IHdpdGggdGhhdFxuICAgICAgaWYgKCFvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBkaWZmW2kgLSAxXTtcbiAgICAgICAgb2xkUmFuZ2VTdGFydCA9IG9sZExpbmU7XG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSBuZXdMaW5lO1xuXG4gICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3V0cHV0IG91ciBjaGFuZ2VzXG4gICAgICBjdXJSYW5nZS5wdXNoKC4uLiBsaW5lcy5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyZW50LmFkZGVkID8gJysnIDogJy0nKSArIGVudHJ5O1xuICAgICAgfSkpO1xuXG4gICAgICAvLyBUcmFjayB0aGUgdXBkYXRlZCBmaWxlIHBvc2l0aW9uXG4gICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xuICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXG4gICAgICBpZiAob2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAvLyBDbG9zZSBvdXQgYW55IGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gb3V0cHV0IChvciBqb2luIG92ZXJsYXBwaW5nKVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xuICAgICAgICAgIC8vIE92ZXJsYXBwaW5nXG4gICAgICAgICAgY3VyUmFuZ2UucHVzaCguLi4gY29udGV4dExpbmVzKGxpbmVzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZW5kIHRoZSByYW5nZSBhbmQgb3V0cHV0XG4gICAgICAgICAgbGV0IGNvbnRleHRTaXplID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBvcHRpb25zLmNvbnRleHQpO1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcy5zbGljZSgwLCBjb250ZXh0U2l6ZSkpKTtcblxuICAgICAgICAgIGxldCBodW5rID0ge1xuICAgICAgICAgICAgb2xkU3RhcnQ6IG9sZFJhbmdlU3RhcnQsXG4gICAgICAgICAgICBvbGRMaW5lczogKG9sZExpbmUgLSBvbGRSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxuICAgICAgICAgICAgbmV3U3RhcnQ6IG5ld1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBuZXdMaW5lczogKG5ld0xpbmUgLSBuZXdSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxuICAgICAgICAgICAgbGluZXM6IGN1clJhbmdlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaSA+PSBkaWZmLmxlbmd0aCAtIDIgJiYgbGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgICAgLy8gRU9GIGlzIGluc2lkZSB0aGlzIGh1bmtcbiAgICAgICAgICAgIGxldCBvbGRFT0ZOZXdsaW5lID0gKC9cXG4kLy50ZXN0KG9sZFN0cikpO1xuICAgICAgICAgICAgbGV0IG5ld0VPRk5ld2xpbmUgPSAoL1xcbiQvLnRlc3QobmV3U3RyKSk7XG4gICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoID09IDAgJiYgIW9sZEVPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlOiBvbGQgaGFzIG5vIGVvbCBhbmQgbm8gdHJhaWxpbmcgY29udGV4dDsgbm8tbmwgY2FuIGVuZCB1cCBiZWZvcmUgYWRkc1xuICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghb2xkRU9GTmV3bGluZSB8fCAhbmV3RU9GTmV3bGluZSkge1xuICAgICAgICAgICAgICBjdXJSYW5nZS5wdXNoKCdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaHVua3MucHVzaChodW5rKTtcblxuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgIGN1clJhbmdlID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbGRGaWxlTmFtZTogb2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcbiAgICBvbGRIZWFkZXI6IG9sZEhlYWRlciwgbmV3SGVhZGVyOiBuZXdIZWFkZXIsXG4gICAgaHVua3M6IGh1bmtzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUd29GaWxlc1BhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRpZmYgPSBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IHJldCA9IFtdO1xuICBpZiAob2xkRmlsZU5hbWUgPT0gbmV3RmlsZU5hbWUpIHtcbiAgICByZXQucHVzaCgnSW5kZXg6ICcgKyBvbGRGaWxlTmFtZSk7XG4gIH1cbiAgcmV0LnB1c2goJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgcmV0LnB1c2goJy0tLSAnICsgZGlmZi5vbGRGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5vbGRIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYub2xkSGVhZGVyKSk7XG4gIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5odW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGh1bmsgPSBkaWZmLmh1bmtzW2ldO1xuICAgIHJldC5wdXNoKFxuICAgICAgJ0BAIC0nICsgaHVuay5vbGRTdGFydCArICcsJyArIGh1bmsub2xkTGluZXNcbiAgICAgICsgJyArJyArIGh1bmsubmV3U3RhcnQgKyAnLCcgKyBodW5rLm5ld0xpbmVzXG4gICAgICArICcgQEAnXG4gICAgKTtcbiAgICByZXQucHVzaC5hcHBseShyZXQsIGh1bmsubGluZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF0Y2goZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICByZXR1cm4gY3JlYXRlVHdvRmlsZXNQYXRjaChmaWxlTmFtZSwgZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucyk7XG59XG4iXX0=


/***/ }),

/***/ 3193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/convertChangesToDMP = convertChangesToDMP;
// See: http://code.google.com/p/google-diff-match-patch/wiki/API
function convertChangesToDMP(changes) {
  var ret = [],
      change = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
      operation = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
  for (var i = 0; i < changes.length; i++) {
    change = changes[i];
    if (change.added) {
      operation = 1;
    } else if (change.removed) {
      operation = -1;
    } else {
      operation = 0;
    }

    ret.push([operation, change.value]);
  }
  return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBQ2dCOztBQUFULFNBQVMsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0M7QUFDM0MsTUFBSSxNQUFNLEVBQU47TUFDQSxnRUFESjtNQUVJLG1FQUZKLENBRDJDO0FBSTNDLE9BQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFFBQVEsTUFBUixFQUFnQixHQUFwQyxFQUF5QztBQUN2QyxhQUFTLFFBQVEsQ0FBUixDQUFULENBRHVDO0FBRXZDLFFBQUksT0FBTyxLQUFQLEVBQWM7QUFDaEIsa0JBQVksQ0FBWixDQURnQjtLQUFsQixNQUVPLElBQUksT0FBTyxPQUFQLEVBQWdCO0FBQ3pCLGtCQUFZLENBQUMsQ0FBRCxDQURhO0tBQXBCLE1BRUE7QUFDTCxrQkFBWSxDQUFaLENBREs7S0FGQTs7QUFNUCxRQUFJLElBQUosQ0FBUyxDQUFDLFNBQUQsRUFBWSxPQUFPLEtBQVAsQ0FBckIsRUFWdUM7R0FBekM7QUFZQSxTQUFPLEdBQVAsQ0FoQjJDO0NBQXRDIiwiZmlsZSI6ImRtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNlZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3dpa2kvQVBJXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb0RNUChjaGFuZ2VzKSB7XG4gIGxldCByZXQgPSBbXSxcbiAgICAgIGNoYW5nZSxcbiAgICAgIG9wZXJhdGlvbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICBvcGVyYXRpb24gPSAxO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIG9wZXJhdGlvbiA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVyYXRpb24gPSAwO1xuICAgIH1cblxuICAgIHJldC5wdXNoKFtvcGVyYXRpb24sIGNoYW5nZS52YWx1ZV0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXX0=


/***/ }),

/***/ 3194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/convertChangesToXML = convertChangesToXML;
function convertChangesToXML(changes) {
  var ret = [];
  for (var i = 0; i < changes.length; i++) {
    var change = changes[i];
    if (change.added) {
      ret.push('<ins>');
    } else if (change.removed) {
      ret.push('<del>');
    }

    ret.push(escapeHTML(change.value));

    if (change.added) {
      ret.push('</ins>');
    } else if (change.removed) {
      ret.push('</del>');
    }
  }
  return ret.join('');
}

function escapeHTML(s) {
  var n = s;
  n = n.replace(/&/g, '&amp;');
  n = n.replace(/</g, '&lt;');
  n = n.replace(/>/g, '&gt;');
  n = n.replace(/"/g, '&quot;');

  return n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L3htbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCO0FBQVQsU0FBUyxtQkFBVCxDQUE2QixPQUE3QixFQUFzQztBQUMzQyxNQUFJLE1BQU0sRUFBTixDQUR1QztBQUUzQyxPQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxRQUFRLE1BQVIsRUFBZ0IsR0FBcEMsRUFBeUM7QUFDdkMsUUFBSSxTQUFTLFFBQVEsQ0FBUixDQUFULENBRG1DO0FBRXZDLFFBQUksT0FBTyxLQUFQLEVBQWM7QUFDaEIsVUFBSSxJQUFKLENBQVMsT0FBVCxFQURnQjtLQUFsQixNQUVPLElBQUksT0FBTyxPQUFQLEVBQWdCO0FBQ3pCLFVBQUksSUFBSixDQUFTLE9BQVQsRUFEeUI7S0FBcEI7O0FBSVAsUUFBSSxJQUFKLENBQVMsV0FBVyxPQUFPLEtBQVAsQ0FBcEIsRUFSdUM7O0FBVXZDLFFBQUksT0FBTyxLQUFQLEVBQWM7QUFDaEIsVUFBSSxJQUFKLENBQVMsUUFBVCxFQURnQjtLQUFsQixNQUVPLElBQUksT0FBTyxPQUFQLEVBQWdCO0FBQ3pCLFVBQUksSUFBSixDQUFTLFFBQVQsRUFEeUI7S0FBcEI7R0FaVDtBQWdCQSxTQUFPLElBQUksSUFBSixDQUFTLEVBQVQsQ0FBUCxDQWxCMkM7Q0FBdEM7O0FBcUJQLFNBQVMsVUFBVCxDQUFvQixDQUFwQixFQUF1QjtBQUNyQixNQUFJLElBQUksQ0FBSixDQURpQjtBQUVyQixNQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBSixDQUZxQjtBQUdyQixNQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FBSixDQUhxQjtBQUlyQixNQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FBSixDQUpxQjtBQUtyQixNQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsUUFBaEIsQ0FBSixDQUxxQjs7QUFPckIsU0FBTyxDQUFQLENBUHFCO0NBQXZCIiwiZmlsZSI6InhtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvWE1MKGNoYW5nZXMpIHtcbiAgbGV0IHJldCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hhbmdlID0gY2hhbmdlc1tpXTtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICByZXQucHVzaCgnPGlucz4nKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICByZXQucHVzaCgnPGRlbD4nKTtcbiAgICB9XG5cbiAgICByZXQucHVzaChlc2NhcGVIVE1MKGNoYW5nZS52YWx1ZSkpO1xuXG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgcmV0LnB1c2goJzwvaW5zPicpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8L2RlbD4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSFRNTChzKSB7XG4gIGxldCBuID0gcztcbiAgbiA9IG4ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICBuID0gbi5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuICByZXR1cm4gbjtcbn1cbiJdfQ==


/***/ }),

/***/ 3195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiffLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DiffLineNumbers__ = __webpack_require__(3196);

let

DiffLine = class DiffLine extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  pushIntoLineFeed(lineObj, part) {
    if (!(part.added || part.removed)) {
      lineObj.added.push(1);
      lineObj.removed.push(1);
    } else
    if (part.added) {
      lineObj.added.push(1);
      lineObj.removed.push(0);
    } else
    if (part.removed) {
      lineObj.added.push(0);
      lineObj.removed.push(1);
    }
    return lineObj;
  }

  computeDiffLineArray(diff, type) {
    var lineObj = {
      added: [],
      removed: [] };

    _.forEach(diff, part => {
      if (type === 'chars') {
        lineObj = this.pushIntoLineFeed(lineObj, part);
      } else
      {
        let eachLine = part.value.split('\n');
        _.forEach(eachLine, () => {
          lineObj = this.pushIntoLineFeed(lineObj, part);
        });
      }
    });
    return lineObj;
  }

  render() {
    let diffLineObj = this.computeDiffLineArray(this.props.diff, this.props.type);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'diff-lines-numbers-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__DiffLineNumbers__["a" /* default */], { lineArray: diffLineObj.added }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__DiffLineNumbers__["a" /* default */], { lineArray: diffLineObj.removed })));


  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiffLineNumbers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

DiffLineNumbers = class DiffLineNumbers extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let lineArray = this.props.lineArray,
    lineIndex = 0;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'diff-line-numbers-wrapper' },

        !_.isEmpty(lineArray) &&
        _.map(lineArray, (cursor, index) => {
          if (cursor === 1) {
            lineIndex = ++lineIndex;
          }
          let lineNumber = cursor === 1 ? ' ' + lineIndex : '';
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'diff-line diff-line-numbers',
                key: index },

              lineNumber));


        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiffTexView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

DiffTexView = class DiffTexView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses(part) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'diff-text-wrapper': true,
      'diff-normal': !(part.added || part.removed),
      'diff-added': part.added,
      'diff-removed': part.removed,
      'diff-line': this.props.ignoreOverlay && this.props.type !== 'chars' });

  }


  getDiffWrapperClass() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'diff-wrapper': true,
      'is-overlayed': !this.props.ignoreOverlay,
      'diff-char': this.props.ignoreOverlay && this.props.type === 'chars' // Character Diff in the modal
    });
  }

  getFlattenedDiff(diff) {
    let flattenedDiff = [];
    _.forEach(diff, part => {
      let eachLine = part.value.split('\n');
      _.forEach(eachLine, line => {// eslint-disable-line lodash/prefer-map
        flattenedDiff.push({
          added: part.added,
          removed: part.removed,
          normal: !(part.added || part.removed),
          value: line });

      });
    });
    return flattenedDiff;
  }

  render() {
    if (this.props.type === 'chars') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('pre', { className: this.getDiffWrapperClass() },

          _.map(this.props.diff, (part, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                  className: this.getClasses(part),
                  key: index },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
                  part.value)));



          })));



    }
    let diff = this.getFlattenedDiff(this.props.diff),
    startsWithNormal = diff && diff[0].normal;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('pre', { className: this.getDiffWrapperClass() },

        _.map(diff, (part, index) => {
          let preText = part.added ? '+' : part.removed ? '-' : ' ',
          className = this.getClasses(part),
          mapKey = _.toString(part) + _.toString(index);
          if (!this.props.ignoreOverlay) {
            let hideNormalLine = part.normal && diff[index + 1] && diff[index + 1].normal,
            isLastNormalEmptyLine = !hideNormalLine && _.isEmpty(part.value) && diff[index + 1] && !diff[index + 1].normal;
            if (startsWithNormal && (hideNormalLine || isLastNormalEmptyLine)) {
              return false;
            }
            startsWithNormal = false;
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: className,
                  key: mapKey },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
                  preText, ' ', part.value)));



          }
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: className,
                key: mapKey },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'diff-text-line' },
                preText, ' ', part.value)));



        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Transfer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__ = __webpack_require__(2731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__ = __webpack_require__(2765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__ = __webpack_require__(1094);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


let

Create = class Create extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper request-create' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Added ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' request '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["h" /* Request */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Update = class Update extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    changesCount = __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__["a" /* default */].getWhiteListedActivitiesCount(activity),
    pluralizedChangeText = __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: changesCount,
      singular: 'change',
      plural: 'changes' });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper request-update' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,

                changesCount > 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', changesCount, ' ', pluralizedChangeText, ' to '),


                changesCount === 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Modified '),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' request '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["h" /* Request */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], { meta: meta })))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))),






          !_.isEmpty(activity.input) && !_.isEmpty(activity.rollback) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["b" /* Details */], activity))));




  }};let


Delete = class Delete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper request-delete' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Deleted ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' request '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["h" /* Request */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Transfer = class Transfer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    source,
    destination;
    if (activity.from && activity.from.model === 'folder') {
      source =
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' from the folder '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["c" /* Folder */], _extends({}, activity.to.instance, {
          actionHandler: this.props.actionHandler })));



    }

    if (activity.to && activity.to.model === 'folder') {
      destination =
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to the folder '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["c" /* Folder */], _extends({}, activity.to.instance, {
          actionHandler: this.props.actionHandler })));



    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper request-transfer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Moved ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' request '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["h" /* Request */], activity.instance),
                source,
                destination,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__ = __webpack_require__(2731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__ = __webpack_require__(2765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__ = __webpack_require__(1094);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


let

Create = class Create extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper folder-create' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Created ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' folder '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["c" /* Folder */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Update = class Update extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    changesCount = __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__["a" /* default */].getWhiteListedActivitiesCount(activity),
    pluralizedChangeText = __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: changesCount,
      singular: 'change',
      plural: 'changes' });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper folder-update' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,

                changesCount > 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', changesCount, ' ', pluralizedChangeText, ' to '),


                changesCount === 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Modified '),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' folder '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["c" /* Folder */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))),






          !_.isEmpty(activity.input) && !_.isEmpty(activity.rollback) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["b" /* Details */], activity))));




  }};let


Delete = class Delete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper folder-delete' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Deleted ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' folder '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["c" /* Folder */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__ = __webpack_require__(2731);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
let

Create = class Create extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper response-create' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Created ', !_.isEmpty(activity.instance) ? 'the' : 'an', ' example '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["i" /* Response */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Update = class Update extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper response-update' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Modified ', !_.isEmpty(activity.instance) ? 'the' : 'an', ' example '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["i" /* Response */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Delete = class Delete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper response-delete' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Deleted ', !_.isEmpty(activity.instance) ? 'the' : 'an', ' example '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["i" /* Response */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

});