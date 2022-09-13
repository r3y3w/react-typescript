
interface HelloProp {
    firstName:string
    lastName:string
}

function Hello ({firstName, lastName}: HelloProp) {
    return (
        <>
        <h1>Hello {firstName} {lastName}!</h1>
        </>
    )

}

export default Hello