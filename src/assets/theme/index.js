const theme={
  color:{
    primaryColor:'#ff385c',
    secondaryColor:'#39C5BB',
  },
  text:{
    primaryColor:"#484848",
    secondaryColor:'#222',
  },
  mixin:{
    boxShadow:`
      transition: box-shadow 0.3s ease;
        &:hover{
          /* background-color: #ddd; */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    `
  }
}

export default theme