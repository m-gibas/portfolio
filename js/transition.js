import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap"; 

class Fade extends Highway.Transition
{
    in({from, to, done}){
        const tl = new TimelineLite();
        tl.fromTo(to, 0.5, {right: '-100%', top: '50%'}, {right: '0%'})
        .fromTo(
            to,
            0.5,
            {height: '2vh'},
            {
            height: '90vh',
            top: '50%',
            right: '50%',
            onComplete: function(){
                from.remove();
                done();
            }
        }
    )
    .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1});

    }
    out({from, done}){
        done();
    }
}

export default Fade;