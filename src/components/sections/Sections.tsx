import { About } from "./about/About"
import { Contact } from "./contact/Contact"
import { Projects } from "./projects/Projects"

export const Sections = () => {
    return (
        <main>
            <About />
            <Projects />
            <Contact />
        </main>
    )
}