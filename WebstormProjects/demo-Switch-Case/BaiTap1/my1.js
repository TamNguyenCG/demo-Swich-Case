
let brower=prompt('Enter the brower you want to transform:'
switch (brower){
    case 'Edge':
        alert("You've got the Edge !")
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert("Okay we support these brower too.")
        break;
    default:
        alert('We hope that this page look OK')
}