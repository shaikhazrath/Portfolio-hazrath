import React from 'react'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button";

const ProjectCard = ({p}) => {
    return (

        <Card className="w-[350px]">
            <img src={p.imageurl} />
            <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>
                   {p.description}
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between">
                <Button asChild>
                    <a href={p.codeurl} > View Code</a>   
                
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard
