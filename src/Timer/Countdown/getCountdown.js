import dayjs from'dayjs';

const getCountdown = ( timestampMs ) => {

    const timestamp = dayjs( timestampMs );
    const timeNow = dayjs();

    if ( timestamp.isBefore( timeNow ) ) {
        return {
            seconds: '00',
            minutes: '00'
        }
    }

    return{
        seconds: getSeconds( timeNow, timestamp ),
        minutes: getMinutes( timeNow, timestamp ),
    }

    function getSeconds( timeNow, timestamp) {
        const seconds = timestamp.diff( timeNow, 'seconds') % 60;
        return zeros( seconds, 2)
    }

    function getMinutes( timeNow, timestamp) {
        const minutes = timestamp.diff( timeNow, 'minutes') % 60;
        return zeros( minutes, 2)
    }

    function zeros(number,minLength){

        const numberString=number.toString();

        if(numberString.length>=minLength) return numberString

        return"0".repeat(minLength-numberString.length)+numberString
                                                                
    }
};

export default getCountdown;