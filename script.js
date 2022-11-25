class Users {
    constructor() {
        this.list = []
    }

    User = class User {
        constructor(specialUser,name, family, mobileNo, phonNo, photo, birthYear) {
            this.specialUser=specialUser
            this.id = Math.random() * 100
            this.name = name;
            this.family = family;
            this.mobileNo = mobileNo;
            this.phonNo = phonNo;
            this.photo = photo;
            this.birthYear = birthYear;
        }
    }

    SpecialUser = class SpecialUser  extends this.User  {

        constructor(specialUser, name, family, mobileNo, phonNo, photo, birthYear, address, email) {
            super(name, family, mobileNo, phonNo, photo, birthYear)
            this.specialUser = specialUser
            this.address = address
            this.email = email

        }
    }
    delete(id) {
        this.list = this.list.filter((user) => user.id != id)
        console.log(this.list);
    }
    addUser(user) {
        if (user.family && user.mobileNo && user.birthYear) {
            if (user.specialUser) {
                this.list.push(new this.SpecialUser(user.name, user.family, user.mobileNo, user.phonNo, user.photo, user.birthYear, user.address, user.email))
                console.log(user.specialUser);
            } else {
                this.list.push(new this.User(user.name, user.family, user.mobileNo, user.phonNo, user.photo, user.birthYear))
            }
        }
        console.log(this.list)

    }
}

const user1 = {
    specialUser:false,
    name: 'ali',
    family: "aliani",
    mobileNo: "0369852",
    phonNo: "21558",
    photo: "clob",
    birthYear: "12365"
}

const user2 = {
    specialUser:true,
    name: 'ali2',
    family: "aliani2",
    mobileNo: "03698522",
    phonNo: "215582",
    photo: "clob2",
    birthYear: "123652"
}
const users = new Users()
console.log(users);

users.addUser(user1)
users.addUser(user2)

users.delete(users.list[0].id)
