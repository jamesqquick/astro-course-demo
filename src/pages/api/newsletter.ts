import type {APIRoute} from "astro"
import {XataClient} from "../../xata"

export const post: APIRoute = async ({request, redirect}) => {
    const client = new XataClient({apiKey: import.meta.env.XATA_API_KEY})
    const formData = await request.formData()
    const email = formData.get("email") as string
    if (!email) {
        return redirect("/newsletter/failure?message=Email is required", 307)
    }
    try {
        await client.db.subscribers.create({
            email,
        })
        return redirect("/newsletter/success", 307)
    } catch (error: any) {
        if (
            error?.errors[0]?.message ===
            "invalid record: column [email]: is not unique"
        ) {
            return redirect(
                "/newsletter/failure?message=Email must be unique",
                307,
            )
        }
        return redirect(
            "/newsletter/failure?message=Email subscribe failed",
            307,
        )
    }
}
