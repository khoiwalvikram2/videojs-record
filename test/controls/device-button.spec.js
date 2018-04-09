/**
 * @since 2.2.0
 */

import TestHelpers from '../test-helpers.js';

import DeviceButton from '../../src/js/controls/device-button.js';


/** @test {device-button} */
describe('controls.DeviceButton', function() {
    var player;

    beforeEach(function() {
        // cleanup all players
        TestHelpers.cleanup();

        // create new player
        player = TestHelpers.makePlayer();
    });

    it('should create the correct DOM element', function() {
        let button = new DeviceButton(player);

        expect(button.el().nodeName).toEqual('BUTTON');
        expect(button.on).toBeFunction();
        expect(button.enabled_).toBeTrue();
        expect(button.controlText_).toEqual('Device');
    });

    it('should accept interaction', function() {
        let button = new DeviceButton(player);

        button.trigger('click');

        expect(player.record().mediaType).toBeDefined();
    });
});