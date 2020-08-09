import { observable, action } from 'mobx'

class AuthStore {
    @observable user = { name: 'wangli', id: '666' };
    @observable config = { env: 'production' };
    @observable list = [1, 2, 3];
}

export default new AuthStore();