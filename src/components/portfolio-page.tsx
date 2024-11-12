"use client"

import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  const skills = [
    { name: "Python", logo: "python.svg" },
    { name: "Javascript", logo: "javascript.svg" },
    { name: "Typescript", logo: "typescript.svg" },
    { name: "React", logo: "react.svg" },
    { name: "Node.js", logo: "node-js.svg" },
    { name: "PostgreSQL", logo: "postgresql.svg" },
    { name: "MongoDB", logo: "mongo.svg" },
    { name: "Git", logo: "git.svg" },
    { name: "AWS", logo: "aws.svg" },
    { name: "Django", logo: "django.svg" },
    { name: "Tailwind", logo: "tailwind.svg" },
    { name: "Numpy", logo: "numpy.svg" },
    { name: "Pandas", logo: "pandas.svg" },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Sticky Header/Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex justify-center items-center h-16 gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              home
            </Link>
            <Link href="#featured-projects" className="hover:text-primary transition-colors">
              projects
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              blog
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">Hi, i&apos;m Jack Doherty 👋</h1>
              <p className="text-lg text-gray-400 mb-6">
                Full-stack developer passionate about building great software
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <MapPin className="w-4 h-4" />
                <span>New York, New York</span>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/jtdoherty" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/-jackdoherty/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="mailto:jtdoherty1105@gmail.com" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-6 h-6" />
                </Link>
                <Link href="/Jack_Thomas_Doherty_Resume.pdf" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <img
                    src="Jack.jpg"
                    alt="Jack"
                    width={125}
                    height={125}
                    className="rounded-full"
                  />
          </div>
        </section>

        {/* Experience & Education Tabs */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="w-full bg-gray-900 border-gray-800">
              <TabsTrigger value="work" className="w-full">Work</TabsTrigger>
              <TabsTrigger value="education" className="w-full">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work" className="mt-8 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Image
                    src="boars-head.svg"
                    alt="Boar's Head Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Boar's Head Provisions</h3>
                  <p className="text-gray-400">Business Analyst Intern</p>
                  <p className="text-sm text-gray-500">June 2023 - August 2023</p>
                  <ul className="mt-2 text-gray-400 list-disc list-inside">
                    <li>Programmed and deployed a Python-based data migration pipeline on AWS, achieving a 50% reduction in transfer time for 100+ terabytes of critical business data.</li>
                    <li>Centralized a SQL database infrastructure on AWS, enhancing data accessibility and security for 50+ stakeholders, resulting in a 30% improvement in query performance across the organization.</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Image
                    src="north-hempstead.svg"
                    alt="North Hempstead Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">North Hempstead Country Club</h3>
                  <p className="text-gray-400">Caddie</p>
                  <p className="text-sm text-gray-500">May 2022 - Present</p>
                  <ul className="mt-2 text-gray-400 list-disc list-inside">
                    <li>Improved golfers' performance through strategic, data-informed guidance and real-time decision-making, showcasing strong analytical and problem-solving skills.</li>
                    <li>Enhanced client satisfaction by delivering precise recommendations, clear communication, and premium, personalized service, building lasting client relationships.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-8 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Image
                    src="Loyola-maryland.svg"
                    alt="Loyola University Maryland logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Loyola University Maryland</h3>
                  <p className="text-gray-400">Bachelor of Information Systems & Data Analytics</p>
                  <p className="text-sm text-gray-500">August 2020 - May 2024</p>
                  <ul className="mt-2 text-gray-400 list-disc list-inside">
                    <li>Captain of Club Basketball Team leading the team for two consecutive years</li>
                    <li>3-time recipient of the Dean's Honor List</li>
                    <li>Courses: Business Intelligence and Data Mining, Data Management and Database Systems, Cyber Security and Networks</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Image
                    src="newcastle.svg"
                    alt="Newcastle University logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Newcastle University</h3>
                  <p className="text-gray-400">Combined Honours</p>
                  <p className="text-sm text-gray-500">January 2023 - May 2023</p>
                  <ul className="mt-2 text-gray-400 list-disc list-inside">
                    <li>Study abroad semester</li>
                    <li>Courses: Global Business Environment, Key Concepts in International Politics, World Philosophies</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Skills Section */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center bg-gray-900 rounded-lg p-3">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="featured-projects" className="px-6 py-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            {/*  <Link href="#" className="text-primary hover:underline">
              view more → 
            </Link> */}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
  <Card className="bg-gray-900 border-gray-800">
    <CardHeader>
      <Image
        src="/project1-image.svg"
        alt="Project 1 preview"
        width={400}
        height={200}
        className="rounded-lg object-cover w-full"
      />
    </CardHeader>
    <CardContent>
      <CardTitle className="mb-2">SportLogicZone</CardTitle>
      <p className="text-gray-400">
      Created SportLogicZone, a data-driven platform providing fantasy rankings, arbitrage opportunities, and high EV bets using analytics and modeling.
      </p>
    </CardContent>
    <CardFooter className="flex flex-wrap gap-2">
      <Badge variant="outline">React</Badge>
      <Badge variant="outline">Node.js</Badge>
      <Badge variant="outline">PostgreSQL</Badge>
    </CardFooter>
  </Card>

  <Card className="bg-gray-900 border-gray-800">
    <CardHeader>
      <Image
        src="/project2-image.svg"
        alt="Project 2 preview"
        width={400}
        height={200}
        className="rounded-lg object-cover w-full"
      />
    </CardHeader>
    <CardContent>
      <CardTitle className="mb-2">JTDPortfolio</CardTitle>
      <p className="text-gray-400">
        A modern portfolio built with Next.js and Tailwind CSS, showcasing my work with a clean, responsive design.
      </p>
    </CardContent>
    <CardFooter className="flex flex-wrap gap-2">
      <Badge variant="outline">Next.js</Badge>
      <Badge variant="outline">Tailwind</Badge>
    </CardFooter>
  </Card>
</div>

          
        </section>
      </main>
      

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Jack Doherty</h2>
            <p className="text-gray-400">Full-stack Developer</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} Jack Doherty. All rights reserved.
        </div>
      </footer>
    </div>
  )
}