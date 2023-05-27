import { useAuth } from '@guoyunhe/react-auth';
import axios from 'axios';

export default function DashboardPage() {
  const auth = useAuth();
  return (
    <div>
      <img src={auth.user?.avatar?.url} />
      <input
        type="file"
        onChange={(e) => {
          const avatar = e.target.files?.[0];
          if (avatar) {
            const data = new FormData();
            data.append('avatar', avatar);
            axios
              .put('/user', data, { headers: { 'Content-Type': 'multipart/form-data' } })
              .then((res) => {
                auth.setUser(res.data);
              });
          }
        }}
      />
    </div>
  );
}
