import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button"

export default function TabsSection(): JSX.Element {
    return (
        <div>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Grid</TabsTrigger>
                    <TabsTrigger value="password">Text</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <div className="flex flex-wrap gap-2 mt-4">
                        {Array(100).fill(null).map((_, i) => (
                            <div key={i} className="h-4 w-4 bg-[hsl(var(--foreground))] rounded"></div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="password">
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
                            Sample text
                        </h2>
                    </div>

                    <Button>Sample Button</Button>

                </TabsContent>
            </Tabs>
        </div>
    );
}
