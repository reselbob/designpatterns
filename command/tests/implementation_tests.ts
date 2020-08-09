import { expect } from 'chai';
import {describe, it, before} from 'mocha';
import {ServerStart} from '../src/implementation/serverstart'
import {ServerPause} from '../src/implementation/serverpause'
import {ServerStop} from '../src/implementation/serverstop'
import { ICommandStatus } from './../src/interface/commandStatus';

describe('Command Tests', function() {
    it('Can init startserver', function() {
        const port: number = 8080;
        const serverstart = new ServerStart(port);
        expect(serverstart).to.be.an('object');
    })

    it('Can execute startserver', function() {
        const port: number = 8080;
        const command = new ServerStart(port);
        const result: ICommandStatus = command.execute();
        expect(result.statusCode).to.equal(200);
    })

    it('Can init ServerStart', function() {
        const port: number = 8080;
        const command = new ServerStart(port);
        const result: ICommandStatus = command.execute();
        expect(result.statusCode).to.equal(200);
    })

    it('Can execute ServerPause', function() {
        const port: number = 8080;
        const command = new ServerPause(port);
        const result: ICommandStatus = command.execute();
        expect(result.statusCode).to.equal(200);
    })

    it('Can init ServerStop', function() {
        const port: number = 8080;
        const server = new ServerStop(port);
        const result: ICommandStatus = server.execute();
        expect(result.statusCode).to.equal(200);
    })
})