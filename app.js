// const app = Vue.createApp({
//     data() {
//         return {
//             courseGoalA: 'Finish the course and learn Vue!' ,
//             courseGoalB: '<h3>Master vue and Build Amazing App</h3>',
//             vueLink: 'https://vuejs.org/'
//         };
//     },
//     methods: {
//         outputGoal() {
//             const randomNumber = Math.random();
//             if (randomNumber < 0.5) {
//                 return this.courseGoalA;
//             } else {
//                 return this.courseGoalB;
//             }
//         }
//     }
// });
// app.mount('#user-goal');
// const app1 = Vue.createApp({
//     data() {
//         return {
//             counter : 0,
//             name : "",
//             confirmName : "",
//             lastname : "",
//             // fullname : "",
//         };
//     },
//     watch: {
//         counter(value) {
//             if(value > 50) {
//                 const that = this;
//                 setTimeout(function () {
//                     that.counter = 0;
//                 },2000);
//             }
//         },
//         // name(value) {
//         //     if(value === ''){
//         //         this.fullname = '';
//         //     }
//         //     this.fullname = value + ' ' + this.lastname;
//         // },
//         // lastname(value) {
//         //     if(value === ''){
//         //         this.fullname = '';
//         //     }
//         //     this.fullname = this.name + ' ' + value;
//         // },
//     },
//     computed: {
//         fullname() {
//             console.log("running again!..");
//             if(this.name === '' || this.lastname === ''){
//                 return '';
//             }
//             return this.name + ' ' + this.lastname;
//         },
//     },
//     methods: {
//         confirmName1() {
//             this.confirmName = this.name;
//         },
//         outputFullname() {
//             console.log("running again!..");
//             if(this.name === ''){
//                 return '';
//             }
//             return this.name + ' ' + 'Patel';
//         },
//         submitForm() {
//             alert("submitted");
//         },
//         setName(event,lastname) {
//             this.name = event.target.value;
//         },
//         add(num) {
//             this.counter = this.counter + num;
//         },
//         reduce(num) {
//             this.counter = this.counter - num;
//         },
//         resetName() {
//             this.name = "";
//             this.lastname = "";
//         }
//     }
// });
// app1.mount('#user-goal...');
const app2 = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        boxSelected(box) {
            console.log("hii raj");
            if(box === 'A'){
                this.boxASelected = true;
            }else if(box === 'B'){
                this.boxBSelected = true;
            }else if(box === 'C'){
                this.boxCSelected =true;
            }
        },
    }
});
app2.mount("#styling");