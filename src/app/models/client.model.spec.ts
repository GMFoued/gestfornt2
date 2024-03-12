import { Client } from "./client.model";

describe('Client',() => {
    it('should create instance',() => {
        expect(new Client()).toBeTruthy();
    });
});