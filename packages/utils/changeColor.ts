export const changeColor = ((color:string, num:number) => {
  let colorArr = [
    parseInt('0x' + color.slice(1, 3)),
    parseInt('0x' + color.slice(3, 5)),
    parseInt('0x' + color.slice(5, 7))
  ]
   let sColorChange:Array<number> = [];
   for(var i=0;i<colorArr.length;i++){
   		let val = colorArr[i]+num;
	    if(val<0){
	       val = 0;
	    }
	    if(val>255){
	    	val=255;
	    }
   		sColorChange.push(val)
   }
   
  var r = sColorChange[0]
  var g = sColorChange[1]
  var b = sColorChange[2]

  var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
})