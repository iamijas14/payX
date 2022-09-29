import { action, makeObservable, observable } from "mobx";

class PaymentDetails {
    eth = {
        amount: null ,
        address: null
    };

    keys = {
        privateKey: "be920aec1ea6433075c4ed2476708953d5ba245f28b12c58e0ea8acd73b87703",
        gasPrice: 19.76
    }

    constructor() {
        makeObservable(
            this, 
                {
                    setAmount: action,
                    setAddress: action,
                    eth: observable,
                }
            );
        }

    setAmount = (amount) => {
        this.eth.amount = amount
        
    }

    setAddress = (address) => {
        this.eth.address = address
    }
}

export default paymentDetails = new PaymentDetails();