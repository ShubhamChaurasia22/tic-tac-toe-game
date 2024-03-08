import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function TabLog({turns}) {
    return (
        <>
            <div class="userTimeline">
                <Timeline>
                    {turns.map(turn =>
                        <TimelineItem key={`${turn.square.row}${turn.square.col}`}>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>{turn.player} selected {turn.square.row}, {turn.square.col}</TimelineContent>
                        </TimelineItem>
                    )}
                </Timeline>
            </div>
        </>
    );
}