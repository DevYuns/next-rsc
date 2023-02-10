import ClientButton from './ClientBtn';
import type {Locale} from '~/lib/i18n';
import type {Post} from '~/lib/types/graphql';
import type {ReactElement} from 'react';
import {getTranslates} from '~/lib/utils/getTranslation';
import {prismaClient} from '~/lib/prisma';

async function getPost(id: string): Promise<Post | null> {
  return await prismaClient.post.findUnique({where: {id}});
}

type Props = {
  params: {lang: Locale; id: string};
};

export default async function PostPage({
  params: {id, lang},
}: Props): Promise<ReactElement> {
  const {post, common} = await getTranslates(lang);
  const data = await getPost(id);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-h1 mb-4">
          {post.title}: {data?.title}
        </h1>
        <p>
          {post.content}: {data?.content}
        </p>
      </div>
      <ClientButton>{common.go_back}</ClientButton>
    </div>
  );
}
