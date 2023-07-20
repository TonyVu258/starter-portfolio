import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header() {
    return (
        <>
            <Container>
                <Div1>
                    <Link href='/' style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20' }}>
                        <DiCssdeck size='3rem' /> <span style={{fontSize: '2.5rem'}}>Portfolio</span>
                    </Link>
                </Div1>
                <Div2 className="mt-7">
                    <li>
                        <Link href='#projects' className="text-3xl leading-8 hover:text-white hover:opacity-100 hover:cursor-pointer">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href='#tech' className="text-3xl leading-8 hover:text-white hover:opacity-100 hover:cursor-pointer">
                            Tech
                        </Link>
                    </li>
                    <li>
                        <Link href='#about' className="text-3xl leading-8 hover:text-white hover:opacity-100 hover:cursor-pointer">
                            About
                        </Link>
                    </li>
                </Div2>
                <Div3>
                    <SocialIcons href="https://google.com">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://google.com">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://google.com">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                </Div3>
            </Container>
        </>
    )
}
