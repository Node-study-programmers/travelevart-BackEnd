import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comment')
@Index('idx_comment_post_id', ['post_id'])
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    post_id: number;

    @Column()
    contents: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ default: false, name: 'check' })
    check: boolean;

    @ManyToOne(() => User, user => user.comment)
    @JoinColumn({ name: 'user_id' })
    user: User;
  
    @ManyToOne(() => Post, post => post.comment)
    @JoinColumn({ name: 'post_id' })
    post: Post;
}
