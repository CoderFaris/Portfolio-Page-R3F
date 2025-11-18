// market.pmnd.rs is a good place for threejs r3f models

import { Text, Html, PresentationControls, Float, Environment, useGLTF, ContactShadows } from '@react-three/drei'
import { Macbook } from './Macbook.jsx';
import { useThree } from '@react-three/fiber';

export default function Experience()
{

    // if the first one doesn't work
    // const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')

    // const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    const { viewport } = useThree();

    // for laptop & text scaling
    const scale = Math.min(viewport.width / 6, 1);
    const textScale = Math.min(1, viewport.width / 8);
    const yPos = viewport.width < 5 ? -0.6 : -1.2;
    // const textX = viewport.width * 0.2; // this means it's 20% off center

    

    return <>
        {/* reflection of city shown on laptop screen */}
        <Environment preset="city"/>

        <color args={['#241a1a']} attach="background"/>

        {/* to make it float... it's so simple */}
        {/* this is to add presentationControls */}
        <PresentationControls 
            global // this is to make it so that you can grab from anywhere, not the model only
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]} // vertical limitation of controls
            azimuth={[-1, 0.75]} // horizontal limitation of controls
            damping={0.1} // bigger value makes animation feel slower, higher value makes animations feel faster
            snap // make it go back to its position after dragging it
        >
            <Float rotationIntensity={0.4}>
                {/* Light on keyboard coming from laptop screen */}
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#9d00ff'}
                    rotation={[-0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                
                <Macbook 
                    position-y={yPos}
                    scale={scale}
                />
                    
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={1 * textScale}
                    position={[2 * textScale, 0.75 * textScale, 0.75 * textScale]}
                    rotation-y={-1.25}
                    maxWidth={2 * textScale}
                    // to center it
                    textAlign='center'
                    // scale={scale}
                >
                    FARIS KADRIC
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
        
        

    </>
}
