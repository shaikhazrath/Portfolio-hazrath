import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button";

const ProjectCard = ({p}) => {
    return (
        <Card className="w-[350px] m-2">
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