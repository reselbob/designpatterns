import { ICommandStatus } from './../src/interface/commandStatus';

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

    it('Can execute startserver', function() {
        const port: number = 8080;
        const serverstart = new ServerStart(port);
        const result: ICommandStatus = serverstart.execute();
        expect(result.statusCode).to.equal(200);
    })

    it('Can init pauseserver', function() {
        const port: number = 8080;
        const serverpause = new ServerPause(port);
        expect(serverpause).to.be.an('object');
    })

    it('Can execute pauseserver', function() {
        const port: number = 8080;
        const serverpause = new ServerPause(port);
        const result: ICommandStatus = serverpause.execute();
        expect(result.statusCode).to.equal(200);
    })

    it('Can init stopserver', function() {
        const port: number = 8080;
        const serverstop = new ServerStop(port);
        expect(serverstop).to.be.an('object');
    })

    it('Can execute stopserver', function() {
        const port: number = 8080;
        const serverstop = new ServerStop(port);
        const result: ICommandStatus = serverstop.execute();
        expect(result.statusCode).to.equal(200);
    })
})