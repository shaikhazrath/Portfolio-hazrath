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

const ProjectCard = () => {
    return (
        <Card className="w-[350px]">
            <img src="projectimage.jpg" />
            <CardHeader>
                <CardTitle>Demo </CardTitle>
                <CardDescription>
                    MongoDB: A NoSQL database for storing data.
                    Express.js: A web application framework for building server-side applications.
                    React: A JavaScript library for creating user interfaces.
                    Node.js: A runtime environment for executing server-side code.
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between">
                <Button>View code  </Button>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard
