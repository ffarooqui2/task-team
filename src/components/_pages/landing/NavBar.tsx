import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center font-medium">
      <div className="flex gap-16 items-center">
        <h2 className="font-bold">TaskTeam</h2>
        <h3>Features</h3>
        <h3>About Us</h3>
      </div>
      <div className="flex gap-8 items-center">
        <h3>Login</h3>
        <Button variant={"default"} className="px-5">
          Get TaskTeam free
        </Button>
      </div>
    </nav>
  );
}
