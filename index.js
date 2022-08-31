const soldier = {
    userName: 'Umar',
    health: 10,
    weapon:{
        name: 'ak-47',
        cartridges: 30
    },
    supplies: 3,
   fire(){ 
    this.weapon.cartridges--
    console.log("бах-бах")
    if(this.weapon.cartridges === 0){
        return console.log("обойма пуста. Перезаредитесь")
    }

   },
   recharge(){
    this.weapon.cartridges = 30;
    this.supplies--;
    console.log("Перезарядка...")
    if(this.supplies === 0){
        console.log('не осталось припасов!')
    }

   },
   hurt(){
    this.health--
    if(this.health === 0){
        console.log('ТЫ ПРОИГРАЛ!')
    }
   }

}
soldier.fire()