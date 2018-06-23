// MIT License
//
// Copyright (c) 2018 Liara A. M. Rørvig
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

//Imports
const assert = require('assert');
const { EventEmitter } = require('events');

//Constants
const CLEANING_MODES = {
    INTERVAL: 0,
    INDIVIDUAL_TIMEOUTS: 1,
    MANUAL: 2
};
const SET_INVALID_VALUE_MODES = {
    IGNORE: 0,
    ERROR: 1,
    DELETE: 2,
    SET: 3
};
const DEFAULT_CLEANING_MODE = CLEANING_MODES.INTERVAL;
const DEFAULT_CLEANING_INTERVAL = 1000;
const DEFAULT_UNREF_TIMEOUTS = true;
const DEFAULT_USE_PROMISES = true;
const DEFAULT_SET_INVALID_VALUE_MODE = SET_INVALID_VALUE_MODES.SET;

class RidiculousMemoryCache extends EventEmitter {
    constructor({
        cleaning_mode = DEFAULT_CLEANING_MODE,
        cleaning_interval = DEFAULT_CLEANING_INTERVAL,
        unref_timeouts = DEFAULT_UNREF_TIMEOUTS,
        use_promises = DEFAULT_UNREF_PROMISES,
        set_invalid_value_mode = DEFAULT_SET_INVALID_VALUE_MODE
    } = {}) {
        super();
    }

    //Public Interface

    get(key) {}

    set(key, value, ttl = 0, callback) {}

    remove(key) {}

    clear(expired_only = false) {}

    size() {}

    keys() {}

    entries() {}

    export(as_json = false) {}

    import(data) {}
}

module.exports = {
    RidiculousMemoryCache,
    CLEANING_MODES,
    SET_INVALID_VALUE_MODES
};
