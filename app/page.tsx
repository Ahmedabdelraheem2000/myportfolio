"use client"

import Link from "next/link"

import { useEffect } from "react"
import { SmartphoneIcon as MobileIcon, Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")?.slice(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MobileIcon className="h-6 w-6" />
            <span className="font-bold">Ahmed Abdelraheem</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <Button asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Ahmed Abdelraheem
                </h1>
                <p className="text-xl text-muted-foreground">Mobile Developer</p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Specializing in Android and Flutter development, building high-performance and user-friendly
                  applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/ahmed-abdelraheem-2067a1207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Ahmedabdelraheem2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="mailto:ahmedabdelraheem@gmail.com" className="text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
            <div className="mx-auto flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-primary">
                <Image
                  src="/ImageProfile.png?height=350&width=350"
                  alt="Ahmed Abdelraheem"
                  width={350}
                  height={350}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <p className="text-lg">
                Mobile Developer specializing in Android and Flutter, with strong expertise in building high-performance
                and user-friendly applications. Proficient in Android development using Kotlin and Java, as well as
                Flutter for seamless cross-platform experiences.
              </p>
              <p className="text-lg">
                Passionate about delivering top-quality solutions, optimizing performance, and staying up to date with
                the latest technologies to enhance user experience.
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Cairo, Egypt</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>ahmedabdelraheem@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MobileIcon className="h-5 w-5 text-muted-foreground" />
                  <span>01099580723</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Bachelor of Computer Science</CardTitle>
                  <CardDescription>Arab Academy for Science and Information Technology</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Cairo • 2019-2023</p>
                  <p>GPA: 3.1 (Very Good)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Android Developer</CardTitle>
                    <CardDescription>Freelancer</CardDescription>
                  </div>
                  <Badge>June 2023 - January 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Mobile Developer creating and developing Mobile Apps using Kotlin, XML, Google Map, Firebase Auth,
                    Firebase Firestore, RestAPI, Storage, RoomDB, MVVM
                  </li>
                  <li>Published apps to Google Play</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Android Developer</CardTitle>
                    <CardDescription>ETAAK</CardDescription>
                  </div>
                  <Badge>February 2022 - June 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Mobile Developer creating and developing Mobile Apps using Kotlin, XML, Google Map, Firebase Auth,
                    Firebase Firestore, RestAPI, Storage, RoomDB, MVVM
                  </li>
                  <li>Published apps to Google Play</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Wassal Kom | كوم وصل</CardTitle>
                <CardDescription>Delivery Application</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-md">
                  <Image
                    src="/WassalKom.png?height=200&width=400"
                    alt="Wassal Kom App"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Developed using Kotlin and MVVM architecture</li>
                  <li>Integrated Google Maps API for real-time location tracking</li>
                  <li>Implemented Firebase Authentication & Firestore</li>
                  <li>Used RestAPI & Retrofit for backend communication</li>
                  <li>Applied Room Database for local storage</li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.halawy.wassalkom1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Google Play
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://bit.ly/3C9DdOq" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Website
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Fitness Tracker</CardTitle>
                <CardDescription>Health & Fitness Application</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-md">
                  <Image
                    src="/Fitness.png?height=200&width=400"
                    alt="Fitness Tracker App"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Developed using Kotlin and MVVM architecture</li>
                  <li>Integrated Google Fit API for activity tracking</li>
                  <li>Implemented Firebase Authentication & Firestore</li>
                  <li>Utilized Jetpack Compose & XML for UI design</li>
                  <li>Integrated Room Database for offline data storage</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.shiba.Fitness_Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Google Play
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Video Splitter</CardTitle>
                <CardDescription>Flutter Application</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-md">
                  <Image
                    src="/VideoSplitter.png?height=200&width=400"
                    alt="Video Splitter App"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Developed using Flutter (Dart) for cross-platform performance</li>
                  <li>Integrated FFmpeg for advanced video processing</li>
                  <li>Designed modern UI with Flutter widgets and Material Design</li>
                  <li>Implemented AdMob ads for monetization</li>
                  <li>Published on Huawei AppGallery</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://appgallery.huawei.com/app/C112524343" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    App Gallery
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
          <Tabs defaultValue="mobile">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="mobile" className="mt-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3">Android SDK</Badge>
                <Badge className="text-sm py-1 px-3">Kotlin</Badge>
                <Badge className="text-sm py-1 px-3">Java</Badge>
                <Badge className="text-sm py-1 px-3">Flutter</Badge>
                <Badge className="text-sm py-1 px-3">Dart</Badge>
                <Badge className="text-sm py-1 px-3">XML</Badge>
                <Badge className="text-sm py-1 px-3">MVVM</Badge>
                <Badge className="text-sm py-1 px-3">Jetpack Compose</Badge>
                <Badge className="text-sm py-1 px-3">Kotlin Coroutines</Badge>
                <Badge className="text-sm py-1 px-3">Flow</Badge>
                <Badge className="text-sm py-1 px-3">LiveData</Badge>
                <Badge className="text-sm py-1 px-3">ViewModel</Badge>
                <Badge className="text-sm py-1 px-3">Data Binding</Badge>
                <Badge className="text-sm py-1 px-3">View Binding</Badge>
                <Badge className="text-sm py-1 px-3">Room Database</Badge>
                <Badge className="text-sm py-1 px-3">Google Maps</Badge>
                <Badge className="text-sm py-1 px-3">Location Services</Badge>
                <Badge className="text-sm py-1 px-3">Push Notifications</Badge>
                <Badge className="text-sm py-1 px-3">Firebase</Badge>
                <Badge className="text-sm py-1 px-3">Retrofit</Badge>
              </div>
            </TabsContent>
            <TabsContent value="web" className="mt-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3">HTML</Badge>
                <Badge className="text-sm py-1 px-3">CSS</Badge>
                <Badge className="text-sm py-1 px-3">JavaScript</Badge>
                <Badge className="text-sm py-1 px-3">TypeScript</Badge>
                <Badge className="text-sm py-1 px-3">Next.js</Badge>
                <Badge className="text-sm py-1 px-3">React.js</Badge>
              </div>
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3">Git/GitHub</Badge>
                <Badge className="text-sm py-1 px-3">Postman</Badge>
                <Badge className="text-sm py-1 px-3">Figma</Badge>
                <Badge className="text-sm py-1 px-3">AdobeXD</Badge>
              </div>
            </TabsContent>
            <TabsContent value="other" className="mt-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3">Problem-Solving</Badge>
                <Badge className="text-sm py-1 px-3">UI/UX</Badge>
                <Badge className="text-sm py-1 px-3">Google Play Publishing</Badge>
                <Badge className="text-sm py-1 px-3">Arabic (Native)</Badge>
                <Badge className="text-sm py-1 px-3">English</Badge>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Certifications Section */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Android Developer (Kotlin)</CardTitle>
                <CardDescription>BambooGeeks • 2023</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Android Developer (Kotlin)</CardTitle>
                <CardDescription>Coursera from Jetprins • 2023</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Android Developer (Java)</CardTitle>
                <CardDescription>Edraak • 2022</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Android Developer</CardTitle>
                <CardDescription>Udacity • 2023</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flutter</CardTitle>
                <CardDescription>Udemy • 2024</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Contact Me</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">ahmedabdelraheem@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MobileIcon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">01099580723</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Social Profiles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/ahmed-abdelraheem-2067a1207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Ahmedabdelraheem2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Ahmed Abdelraheem. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ahmed-abdelraheem-2067a1207/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Ahmedabdelraheem2000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:ahmedabdelraheem@gmail.com" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

