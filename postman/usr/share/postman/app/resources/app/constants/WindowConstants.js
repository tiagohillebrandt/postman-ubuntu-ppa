// If x and y are not explicitly defined, default position of window is center.
const DEFAULT_REQUESTER_BOUNDS = { x: null, y: null, width: 1280, height: 800 };
const DEFAULT_RUNNER_BOUNDS = { x: null, y: null, width: 1280, height: 800 };
const DEFAULT_CONSOLE_BOUNDS = { x: null, y: null, width: 900, height: 600 };
const MIN_ALLOWED_WINDOW_WIDTH = 450;
const MIN_ALLOWED_WINDOW_HEIGHT = 224;

module.exports = {
  DEFAULT_REQUESTER_BOUNDS,
  DEFAULT_CONSOLE_BOUNDS,
  DEFAULT_RUNNER_BOUNDS,
  MIN_ALLOWED_WINDOW_WIDTH,
  MIN_ALLOWED_WINDOW_HEIGHT
};
