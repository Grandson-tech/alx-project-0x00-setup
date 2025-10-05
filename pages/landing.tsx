import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      
      {/* Button examples with different sizes and shapes */}
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Button Examples:</h2>
        
        {/* Small buttons */}
        <div className="space-x-2">
          <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Small Rounded-md" size="small" shape="rounded-md" />
          <Button title="Small Rounded-full" size="small" shape="rounded-full" />
        </div>
        
        {/* Medium buttons */}
        <div className="space-x-2">
          <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button title="Medium Rounded-full" size="medium" shape="rounded-full" />
        </div>
        
        {/* Large buttons */}
        <div className="space-x-2">
          <Button title="Large Rounded-sm" size="large" shape="rounded-sm" />
          <Button title="Large Rounded-md" size="large" shape="rounded-md" />
          <Button title="Large Rounded-full" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  )
}
export default Landing;
