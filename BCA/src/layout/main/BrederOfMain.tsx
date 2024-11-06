// Must have the following parameters
 interface Props{
    name:string
 }
export default function BrederOfMain(prpos:Props) {
    ;
    
  return (
    <div>
        {/* מציג לנו את השם שבתוך הפרופס */}
        {prpos.name}
    </div>
  )
}
