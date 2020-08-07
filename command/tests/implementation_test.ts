
import { expect } from 'chai';
import {describe, it, before} from 'mocha';
import {ServerStart} from '../src/implementation/serverstart'
import {ServerPause} from '../src/implementation/serverpause'
import {ServerStop} from '../src/implementation/serverstop'
describe('Command Tests', function() {
    it('Can init startserver', function() {
        const port: number = 8080;
        const serverstart = new ServerStart(port);
        expect(serverstart).to.be.an('object');
    })

    it('Can init pauseserver', function() {
        const port: number = 8080;
        const serverstart = new ServerPause(port);
        expect(serverstart).to.be.an('object');
    })

    it('Can init pauseserver', function() {
        const port: number = 8080;
        const serverstart = new ServerStop(port);
        expect(serverstart).to.be.an('object');
    })
})