export default function EmptyTable({data = [], columns = 1}) {

    if (data.length === 0) {

        const cantOfColumns = []

        for (let i = 0; i < columns; i++) {
            cantOfColumns.push(<td key={i} className='py-3 text-center'>Calculo pendiente</td>)
        }

        return (
            <tr key={0} className="bg-white border-b dark:text-white dark:bg-[#292929] dark:border-[#404040]">
                {cantOfColumns}
            </tr>
        )
    }
}