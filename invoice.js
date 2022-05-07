const app =new Vue({
el:"#app",
data:{
count: 1000 * 5
},
created(){
setInterval(()=> {
this.count = this.count - 1
}, 1000)

}
})
