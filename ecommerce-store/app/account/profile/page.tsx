"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export default function ProfilePage() {
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate saving profile
    setTimeout(() => {
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <Card className="max-w-2xl">
              <form onSubmit={handleSaveProfile}>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Personal Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Password</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="confirm-password">Confirm new password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save changes"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and track your previous orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "ORD-123456",
                      date: "May 2, 2025",
                      status: "Delivered",
                      total: 129.99,
                    },
                    {
                      id: "ORD-789012",
                      date: "April 15, 2025",
                      status: "Shipped",
                      total: 79.95,
                    },
                    {
                      id: "ORD-345678",
                      date: "March 28, 2025",
                      status: "Delivered",
                      total: 214.5,
                    },
                  ].map((order) => (
                    <div key={order.id} className="flex flex-col gap-2 rounded-lg border p-4">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">{order.id}</h4>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-medium">Total:</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        View Order Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addresses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Addresses</CardTitle>
                <CardDescription>Manage your shipping and billing addresses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Home Address</h4>
                        <p className="text-sm text-muted-foreground">Default shipping address</p>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>John Doe</p>
                      <p>123 Main Street</p>
                      <p>Apt 4B</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Work Address</h4>
                        <p className="text-sm text-muted-foreground">Billing address</p>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>John Doe</p>
                      <p>456 Business Ave</p>
                      <p>Suite 200</p>
                      <p>San Francisco, CA 94107</p>
                      <p>United States</p>
                      <p>+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <Button variant="outline" className="mt-4">
                    Add New Address
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
