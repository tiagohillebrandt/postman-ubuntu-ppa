xmlToJson = function (data) {
  var x2js = new X2JS();
  var jsonObj = x2js.xml_str2json(data);
  return jsonObj;
};

xml2Json = function (data) {
  var JSON = {};
  xml2js.parseString(data, {
    explicitArray: false,
    async: false,
    trim: true,
    mergeAttrs: false
  }, function (err, result) {
    JSON = result;
  });
  return JSON;
};
