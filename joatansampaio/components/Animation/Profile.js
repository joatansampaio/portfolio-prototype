import FloatingBall from "../Animation/FloatingBall"
import Image from "next/image";
import profile from "../../public/images/profpic.png"
import { motion } from "framer-motion"

function Profile() {

    return (
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1, 
                scale: 1
            }}
            transition={{
                duration: 1
            }}
        >
            <div className="relative h-96">
                <div className="absolute top-28 left-1/2 -translate-x-1/2">
                    <Image className="rounded-full w-44 z-10 animate-background md:w-80" src={profile} alt="Joatan Sampaio" />
                    <FloatingBall attr="animate-circ0 before:content-html" />
                    <FloatingBall attr="animate-circ45 before:content-css" />
                    <FloatingBall attr="animate-circ90 before:content-java" />
                    <FloatingBall attr="animate-circ180 before:content-javascript" />
                    <FloatingBall attr="animate-circ270 before:content-react" />
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-32 intro-text">
                <div>Hi, I&apos;m <span>Joatan</span>,</div>
                <div>I&apos;m a computer science student</div>
            </div>
        </motion.div>

    );

}

export default Profile;