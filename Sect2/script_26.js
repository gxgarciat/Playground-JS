// Use of Switch

const day = 'monday';

switch(day) {
    case 'monday': //day === 'monday'
        console.log('Plan');
        break; // Break is required to stop the code once the strict comparison is done
    case 'tuesday':
        console.log('Prepare videos');
    case 'wednesday':
    case 'thursday': // Trick
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}