import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import logo from './assets/logo.svg';

const HaccpPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Header */}
            <header className="bg-slate-900 sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="ChefCode" className="h-16 w-auto" />
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-slate-300 hover:text-orange-500 font-bold transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-24 text-center">
                <div className="max-w-2xl mx-auto">
                    <div className="w-24 h-24 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-8 text-orange-600 shadow-xl shadow-orange-500/20">
                        <ShieldCheck size={48} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
                        HACCP 2.0 <br />
                        <span className="text-orange-600">Coming Soon</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        We are building the most advanced AI-assisted food safety system.
                        Automated logging, blockchain integrity, and effortless compliance are just around the corner.
                    </p>

                    <div className="p-8 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-3xl shadow-xl shadow-blue-900/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 relative z-10">Want early access?</h3>
                        <p className="text-slate-500 mb-8 relative z-10">Join our waitlist to be notifed when the full HACCP module launches.</p>
                        <Link to="/#demo-signup" className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 relative z-10">
                            Join Beta List
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Minimal */}
            <footer className="bg-slate-900 py-10 mt-24 text-center text-slate-500 text-sm border-t border-slate-800">
                <p>&copy; 2025 ChefCode. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HaccpPage;
