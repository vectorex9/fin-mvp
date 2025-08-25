import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export function CaseStudiesSection() {
    const articles = [
        { title: 'Media Article Title', url: 'https://websiteurl.com' },
        { title: 'Media Article Title', url: 'https://websiteurl.com' },
        { title: 'Media Article Title', url: 'https://websiteurl.com' },
        { title: 'Media Article Title', url: 'https://websiteurl.com' },
        { title: 'Media Article Title', url: 'https://websiteurl.com' },
    ];

    return (
        <section className='min-h-screen bg-white flex flex-col md:flex-row px-8 lg:px-16 py-16'>
            {/* Left Side - Images */}
            <div className='w-1/3 flex flex-col gap-4'>
                <div className='h-1/3 relative'>
                    <Image
                        src='/person-working-at-desk-with-computer.png'
                        alt='Person working'
                        fill
                        className='object-cover rounded-lg'
                    />
                </div>
                <div className='h-1/3 relative'>
                    <Image
                        src='/business-team-meeting-discussion.png'
                        alt='Team meeting'
                        fill
                        className='object-cover rounded-lg'
                    />
                </div>
                <div className='h-1/3 relative'>
                    <Image
                        src='/modern-office-exterior.png'
                        alt='Office building'
                        fill
                        className='object-cover rounded-lg'
                    />
                </div>
            </div>

            {/* Right Side - Content */}
            <div className='w-2/3 pl-16'>
                {/* Header */}
                <div className='mb-8'>
                    <span className='text-xs tracking-widest text-gray-600 uppercase font-mono'>
                        NEWS
                    </span>
                </div>

                <h2 className='text-5xl lg:text-6xl font-light text-gray-900 mb-16'>
                    Case Studies
                </h2>

                {/* Articles List */}
                <div className='space-y-8'>
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className='flex items-center justify-between py-4 border-b border-gray-200'
                        >
                            <h3 className='text-xl font-medium text-gray-900'>
                                {article.title}
                            </h3>
                            <div className='flex items-center gap-4 text-gray-600'>
                                <span className='text-sm'>{article.url}</span>
                                <ExternalLink className='w-4 h-4' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
