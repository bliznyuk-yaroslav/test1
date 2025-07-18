import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Download, FileText, Filter, Search, Upload, User } from "lucide-react"

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100/40 dark:bg-gray-800/40">
      {/* Sidebar */}
      <div className="flex flex-col w-64 border-r bg-white dark:bg-gray-950">
        <div className="flex items-center h-16 px-6 border-b">
          <h1 className="text-lg font-semibold">Document Portal</h1>
          <Button variant="ghost" size="icon" className="ml-auto">
            <ArrowLeft className="w-4 h-4" />
            <span className="sr-only">Collapse sidebar</span>
          </Button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Upload className="w-4 h-4" />
            Upload doc
          </Button>
          <Button variant="secondary" className="w-full justify-start gap-2">
            <Search className="w-4 h-4" />
            Search
          </Button>
        </nav>
        <div className="flex items-center gap-3 p-4 border-t">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 text-sm">
            <div className="font-medium">development</div>
            <div className="text-gray-500 dark:text-gray-400">User</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="flex items-center h-16 px-6 border-b bg-white dark:bg-gray-950">
          <h1 className="text-lg font-semibold">Document Explorer</h1>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid gap-6">
            {/* Search and Filters */}
            <div className="grid gap-4">
              <Input placeholder="Search documents..." className="w-full max-w-md" />
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Filter className="w-4 h-4" />
                  Filters
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="grid gap-1.5">
                    <label htmlFor="country" className="text-sm font-medium">
                      COUNTRY
                    </label>
                    <Select defaultValue="all-countries">
                      <SelectTrigger id="country">
                        <SelectValue placeholder="All Countries" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-countries">All Countries</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="award-type" className="text-sm font-medium">
                      AWARD TYPE
                    </label>
                    <Select defaultValue="all-award-types">
                      <SelectTrigger id="award-type">
                        <SelectValue placeholder="All Award Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-award-types">All Award Types</SelectItem>
                        <SelectItem value="espp">ESPP</SelectItem>
                        <SelectItem value="rsu">RSU</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="employment" className="text-sm font-medium">
                      EMPLOYMENT
                    </label>
                    <Select defaultValue="all-employment-types">
                      <SelectTrigger id="employment">
                        <SelectValue placeholder="All Employment Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-employment-types">All Employment Types</SelectItem>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline">Clear Filters</Button>
                </div>
              </div>
            </div>

            {/* Document List Header */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">4 documents found</div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
                <Select defaultValue="date-newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Date (Newest)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-newest">Date (Newest)</SelectItem>
                    <SelectItem value="date-oldest">Date (Oldest)</SelectItem>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Document Cards */}
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6 grid gap-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-lg font-semibold">Employee Stock Purchase Plan - United States Regulations</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Dec 15, 2024</span>
                    <span>•</span>
                    <span>2.4 MB</span>
                    <span>•</span>
                    <span>United States</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                      ESPP
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                      Full-time
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <h4 className="font-semibold">AI Summary</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Comprehensive guide covering ESPP regulations in the US, including tax implications, holding
                      periods, and compliance requirements for publicly traded companies.
                    </p>
                  </div>
                  <Button className="w-fit">
                    <Download className="w-4 h-4 mr-2" />
                    Download DOC
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 grid gap-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-lg font-semibold">Restricted Stock Unit Agreement Template - Canada</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Nov 20, 2024</span>
                    <span>•</span>
                    <span>1.8 MB</span>
                    <span>•</span>
                    <span>Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                      RSU
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                      Full-time
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <h4 className="font-semibold">AI Summary</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Standard RSU agreement for Canadian employees, outlining vesting schedules, tax implications, and
                      transfer restrictions.
                    </p>
                  </div>
                  <Button className="w-fit">
                    <Download className="w-4 h-4 mr-2" />
                    Download DOC
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
