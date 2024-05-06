import  { ReactNode } from 'react'
import Accordion from 'react-bootstrap/Accordion';
interface AccordionBoxProps {
  eventKey: string,
  title: string,
  children: ReactNode
}
function AccordionBox(props: AccordionBoxProps) {
  const { eventKey, title, children } = props
  return (
    <div>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {children}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  )
}

export default AccordionBox