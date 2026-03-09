const server = (port: number) => {
  console.log(`服务启动成功，端口:${port}`);
};
server(3000);
const Controlle = ()=>{

}


const getAge = ()=>{
  return 20
}
const getName = ()=>{
  return "小杨"
}

const setName = (value:string)=>{
  const name = value
}
const setAge = (value:number)=>{
  let age
  return ()=>{
    age = value
  }
}

//注释