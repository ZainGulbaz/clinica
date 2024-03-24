import Dropdown from "./dropdown"

const dropDownDetails={
    title:"Menu",
    options:[{
        title:"Login"
    },{
        title:"Download the app"
    },{
        title:"Customer Support"
    },{
        title:"English"
    }]

}

export function Header(){
    return(
        <nav className="flex justify-between py-6 px-3 shadow-lg bg-gray-100">
        <h4 className="text-3xl italic font-bold font-serif">Clinica</h4>
        <Dropdown details={dropDownDetails}/>
      </nav>
    )
}