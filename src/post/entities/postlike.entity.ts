import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../../user/entities/user.entity';
import { Post } from './post.entity';

@Entity('postlike')
export class Postlike {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    post_id: number;

    @Column({ default: false })
    check_read: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @ManyToOne(() => User, user => user.postlikes)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Post, post => post.postlikes)
    @JoinColumn({ name: 'post_id' })
    post: Post;
}