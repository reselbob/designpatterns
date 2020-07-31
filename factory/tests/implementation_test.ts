import { IFactory } from './../src/interface/factory';
import { IResult } from './../src/interface/result';
import { Transport } from './../src/enum/transport';
import { Factory } from './../src/implementation/factory';
import { expect } from 'chai';
import {describe, it, before} from 'mocha';
import {IMessenger} from '../src/interface/messenger';
const factory = new Factory();
describe('Factory Tests', function() {
    it('Can init create emailer', function() {
        const messenger: IMessenger = factory.getMessenger(Transport.EMAIL);
        const to: object = {firstName: 'Joe', lastName: 'Smith'};
        const from: object = {firstName: 'Jane', lastName: 'Doe'};
        const message: object = {id: 1, payload: 'Hi There'};
        const result: IResult = messenger.send(to, from, message)
        expect(result.message).to.equal('EMAIL OK');
        expect(result.statusCode).to.equal(200);
        expect(result.transport).to.equal(Transport.EMAIL);
    })

    it('Can init create sms', function() {
        const messenger: IMessenger = factory.getMessenger(Transport.SMS);
        const to: object = {firstName: 'Joe', lastName: 'Smith'};
        const from: object = {firstName: 'Jane', lastName: 'Doe'};
        const message: object = {id: 1, payload: 'Hi There'};
        const result: IResult = messenger.send(to, from, message)
        expect(result.message).to.equal('SMS OK');
        expect(result.statusCode).to.equal(200);
        expect(result.transport).to.equal(Transport.SMS);
    })

    it('Can init create sms', function() {
        const messenger: IMessenger = factory.getMessenger(Transport.SOCIAL_MEDIA);
        const to: object = {firstName: 'Joe', lastName: 'Smith'};
        const from: object = {firstName: 'Jane', lastName: 'Doe'};
        const message: object = {id: 1, payload: 'Hi There'};
        const result: IResult = messenger.send(to, from, message)
        expect(result.message).to.equal('SOCIAL_MEDIA OK');
        expect(result.statusCode).to.equal(200);
        expect(result.transport).to.equal(Transport.SOCIAL_MEDIA);
    })
})