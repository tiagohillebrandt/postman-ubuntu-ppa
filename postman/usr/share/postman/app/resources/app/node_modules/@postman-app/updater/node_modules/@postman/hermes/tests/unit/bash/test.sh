#!/bin/bash
set -e

echo "Running tests for bash scripts"

"${0%/*}/swap_and_relaunch.test.sh"
