import './Timeline.css'

interface TimelineProps{ 
    data: {
        index: number,
        position?: string,
        company?: string,
        date: string,
        description: string,
        skills?: string,
        college?: string,
        course?: string,
        grade?: string
    }[]
}

const Timeline: React.FC<TimelineProps>  = ({data}) => {

    return (
        <div className='timeline'>
        {data.map((i,index) => (
            <div key={index} className="timelineItem">
                <div className={`timelineDate ${index % 2 === 0 ? 'dateRight' : 'dateLeft' }`}>
                   <span>{i.date}</span>
                </div>
                <div className="timelineDot"></div>
                <div className={`timelineContent ${index % 2 === 0 ? 'contentLeft' : 'contentRight' }`}>
                    <h3>{i.position ? i.position : i.college}</h3>
                    <h4>{i.company ? i.company : i.course}</h4>
                    <span className="date">{i.date}</span>
                    <p>
                    {i.description}
                    </p>
                    {i.skills ? <p><strong>Skills:</strong> {i.skills}</p> : " "}
                </div>
            </div>
        ))}
            
        </div>

    )
}

export default Timeline
