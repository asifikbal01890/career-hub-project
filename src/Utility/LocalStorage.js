import toast from "react-hot-toast";

 const getStorageItem = () =>{
    const getData = localStorage.getItem('applyJob')
    if (getData) {
        return JSON.parse(getData)
    }
    return [];
 }

 const setStorageItem = (id, title) =>{
    const havingData = getStorageItem()
    const data = havingData.find(having => having === id)
    
    if (!data) {
        havingData.push(id)
        return (
            localStorage.setItem("applyJob", JSON.stringify(havingData)),
            toast.success(`${title} Job Apply Success`)
        )
    }
    return toast.error(`You have alredy Appling this ${title} job`, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      })
 }

 export {getStorageItem, setStorageItem}