import { expect } from 'chai';
import {describe, it, before} from 'mocha';
import {ServerStart} from '../src/implementation/serverstart'
import {ServerPause} from '../src/implementation/serverpause'
import {ServerStop} from '../src/implementation/serverstop'
import { ICommandStatus } from './../src/interface/commandStatus';
import { ICommand } from '../src/interface/command';
import { Controller } from './../src/implementation/controller';

describe('Controller Tests', function() {
    it('Can get commands from controller', function() {
        const defaultPort: number = 8080;
        const contoller = new Controller()
        const commands: Array<ICommand> = contoller.getCommands(defaultPort);
        expect(commands).to.an('array');
    });

    it('Can get execute commands from controller', function() {
        const defaultPort: number = 8080;
        const controller = new Controller()
        const commands: Array<ICommand> = controller.getCommands(defaultPort);
        commands.forEach(command => {
            const result: ICommandStatus = controller.execute(command)
            expect(result.statusCode).to.equal(200);
        });
    })
})