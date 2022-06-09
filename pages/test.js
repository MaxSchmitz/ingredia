import Layout from '../components/layout'

const Test = () => {
    

    function calculateDaysBetweenDates(begin, end) {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(begin);
        var secondDate = new Date(end);

        return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    }

    function calculateVolumeSphere(radius) {
        return (4 / 3) * Math.PI * Math.pow(radius, 3);
    }


    return(
        <Layout>
            <h1 className="text-10xl font-bold underline">
                Hello world!
            </h1>
            <h1 class="text-sky-400">{calculateDaysBetweenDates("01/01/2014", "01/01/2015")}</h1>
            <h1>{calculateVolumeSphere(5)}</h1>
        </Layout>
    )
} 

export default Test